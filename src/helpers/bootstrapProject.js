import fs from 'fs-extra';
import { createSpinner } from 'nanospinner';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execa } from 'execa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const foldersToCreate = ['assets', 'components', 'entities', 'utils'];

const spinner = createSpinner();

const bootstrapProject = async (projectName, project_type) => {
    spinner.start({
        text: 'Boostrapping project',
    });

    await fs.copy(join(__dirname, `../../templates/${project_type}`), `./${projectName}`);

    for (let i = 0; i < foldersToCreate.length; i += 1) {
        fs.mkdir(join(process.cwd(), `./${projectName}/src`, foldersToCreate[i]));
    }

    spinner.success({
        text: 'Project bootstrapped',
    });

    spinner.start({
        text: 'Installing dependencies'
    });

    await execa('npm', ['install'], { cwd: join(process.cwd(), `./${projectName}`) });

    spinner.success({
        text: 'Dependencies installed'
    });
};

export { bootstrapProject };
