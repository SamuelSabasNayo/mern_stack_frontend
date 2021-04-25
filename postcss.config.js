/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export const plugins = [
  tailwindcss('./tailwind.js'),
  autoprefixer
];
