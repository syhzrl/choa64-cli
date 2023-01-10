#!/usr/bin/env node

import figlet from 'figlet';
import gradient from 'gradient-string';
import { bootstrapProject } from '../src/helpers/bootstrapProject.js';
import { askProjectDetails } from './helpers/askProjectDetails.js';

const sleep = (ms = 100) => new Promise((r) => setTimeout(r, ms));

const renderTitle = async () => {
    figlet('Choa64 CLI', (err, data) => {
        console.log(gradient.vice(data));
    });

    await sleep();
};

const main = async () => {
    await renderTitle();

    const { project_name, project_type } = await askProjectDetails();

    await bootstrapProject(project_name);
};

await main();
