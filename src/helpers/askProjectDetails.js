import chalk from 'chalk';
import inquirer from 'inquirer';

const projectTypeChoices = [{
    name: 'Front End (NextJs, Tailwindcss)',
    value: 'fe'
}, {
    name: 'Full Stack (NextJS, Tailwind, tRPC, Prisma)',
    value: 'fs'
}, {
    name: 'Back End (NestJS, Prisma)',
    value: 'be'
}];


const askProjectDetails = async () => {
    const { project_type } = await inquirer.prompt({
        type: 'list',
        name: 'project_type',
        message: chalk.blue('Select a project type'),
        choices: projectTypeChoices,
    });

    const { project_name } = await inquirer.prompt({
        type: 'input',
        name: 'project_name',
        message: 'Give your project a name',
        default: 'my-app'
    });

    return {
        project_type,
        project_name,
    };
};

export {
    askProjectDetails,
};
