// generate cards based on role
const generateCard = teamData => {
    const team = teamData.map(data => {
        const role = data.getRole();
        
        if (role === 'Manager') {
            return generateManager(data);
        } else if (role === 'Engineer') {
            return generateEngineer(data);
        } else {
            return generateIntern(data);
        }
    });
    return team.join('');
};


// generate manager card
const generateManager = manager => {
    return `
                    <div class="col-3 justify-content-around bg-light text-dark m-2 rounded">
                        <h2>${manager.name}</h2>
                        <h3>Manager</h3>
                        <p>ID: ${manager.id}</p>
                        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p>Office Number: ${manager.officeNumber}</p>
                    </div>
    `;
};

// generate engineer card(s)
const generateEngineer = engineer => {
    return `
                    <div class="col-3 justify-content-around bg-light text-dark m-2 rounded">    
                        <h2>${engineer.name}</h2>
                        <h3>Engineer</h3>
                        <p>ID: ${engineer.id}</p>
                        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                        <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
                    </div>
    `;
};

// generate intern card(s)
const generateIntern = intern => {
    return `
                    <div class="col-3 justify-content-around bg-light text-dark m-2 rounded">
                        <h2>${intern.name}</h2>
                        <h3>Intern</h3>
                        <p>ID: ${intern.id}</p>
                        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                        <p>Work: ${intern.work}</p>
                    </div>
    `;
};

// generate html
module.exports = teamData => {
    console.log(teamData);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
    </head>
    <body>
        <header class="b-container fluid">
            <div class="row">
                <h1 class="col text-center bg-primary bg-gradient p-4 text-light">Team Profile</h1>
            </div>
        </header>
        <div class="b-container fluid">
            <div class="row bg-info bg-gradient justify-content-around">
                <main class="col col-9 bg-primary m-2 rounded">
                    <div class="row justify-content-around">
                       ${generateCard(teamData)}
                   </div>
                </main>
            </div>
        </div>
    </body>
    </html>
    `;
};