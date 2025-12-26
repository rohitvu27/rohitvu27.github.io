import command from '../../config.json' assert {type: 'json'};

const createProject = () : string[] => {
  let string = "";
  const projects : string[] = [];
  const SPACE = "&nbsp;";

  projects.push("<br>")
  
  // Projects section
  projects.push("<span class='command'>PROJECTS:</span>");
  projects.push("<br>");
  
  command.projects.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(40 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = '';
  });

  projects.push("<br>");
  
  // Writeups section
  projects.push("<span class='command'>WRITEUPS:</span>");
  projects.push("<br>");
  
  command.writeups.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(40 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = '';
  });

  const totalFiles = `${command.projects.length + command.writeups.length} File(s)`;
  projects.push("<br>");
  projects.push(totalFiles);
  projects.push("<br>");
  return projects
}

export const PROJECTS = createProject()
