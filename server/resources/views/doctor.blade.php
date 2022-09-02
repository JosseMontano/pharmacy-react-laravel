<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        h1 {
            text-align: center;
        }

        #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #customers td,
        #customers th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #customers tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #customers tr:hover {
            background-color: #ddd;
        }

        #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04AA6D;
            color: white;
        }
    </style>

</head>

<body>

    <h1>Doctores en el area de salud</h1>

    <table id="customers">
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Especialidad</th>
        </tr>
        @foreach ($show_doctors as $doctor)
        <tr>
            <td>{{$doctor->name_person}}</td>
            <td>{{$doctor->last_name_person}}</td>
            <td>{{$doctor->name_speciallity}}</td>
        </tr>
        @endforeach
    </table>

</body>

</html>