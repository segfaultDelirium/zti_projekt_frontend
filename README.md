
# Backend to this project is in repo "zti_projekt_backend"

# ZtiProjektFrontend
This project is a web app that allows viewing database data and modifying it. The problem that the aplication is trying to solve is easily finding the history of a given record (for example Location record) knowing exactly which field changed and at which timestamp.
![timeline](https://github.com/segfaultDelirium/zti_projekt_frontend/assets/82722872/647822d2-d24f-4b05-b8e3-c61876c95d02)
The application has unique database design - each column of a record is stored in a separate table along with timestamp and record id reference. Thanks to this, the information about which exact field has changed is stored directly in database instead of being calculated. Furthermore, the database can be scaled trivially easy by moving the column to different server and doing parallel query. 
When record is modified, only the fields that changed are "copied", therefore the storage space grows slower compared to classical approach of just creating a copy of entire record.
Database schema:
![schema2023-05-14](https://github.com/segfaultDelirium/zti_projekt_frontend/assets/82722872/726e4742-476c-4896-a9c7-600be8a523c1)

An PostgreSQL function based interface to the database has been created. For example, here is method to update a location record, where zti_projekt2.update_location is a PostgreSQL function.
```
 public ModificationResult updateLocation(Location location) {
        String sql = "SELECT * from zti_projekt2.update_location(?, ?, ?, ?, ?, ?, ?, ?)";

        // Define the parameters for the function
        Object[] params = new Object[] { location.getLocationId(), location.getStreetAddress(), location.getCity(), location.getZipcode(), location.getState(),
                location.getCountryCodeIdOrNull(), location.getActivityIdOrNull(), location.getCompanyName() };

        // Execute the function and get the result
        return jdbcTemplate.queryForObject(sql, params, (rs, rowNum) -> {
            boolean success = rs.getBoolean("success");
            String message = rs.getString("message");
            return new ModificationResult(success, message);
        });
    }
```
## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:43555/`. The application will automatically reload if you change any of the source files.


create prod build:
npm run build_prod

copy the prod build to remote server:
scp -r zti_projekt_frontend root@143.42.61.153:/zti_frontend/
