# assessment-shipvista

To run

First goes into frontend folder, in the directory search click it and enter cmd. A cmd windown will open enter npm i to install all required npm modules.

Open the sql file in Sql Server Management Studio, then click on execute. If a window appear then write localhost\sqlexpress, click connet

Opne backend folder in Visual Studio 2019. Press ctrl+f5 to run. Chnage the route first from http://localhost:19919/weatherforecast to http://localhost:19919/api/Plants

(19919: port Number might be diiferent). This will get all plants in the api form and displaying on the screen.

Copy the port number and open src/actions/api.js file from frontend folder and change the portNumber from baseUrl variable
