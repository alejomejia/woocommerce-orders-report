# Woocommerce Orders Report

Get WordPress > Woocommerce orders information to generate daily custom reports in `.xlsx` format to be sent as attachments daily to specific emails.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/alejomejia/woocommerce-orders-report.git`
2. Navigate into the project directory: `cd woocommerce-orders-report`
3. Install the dependencies: `npm install`
4. Create a `.env` file and copy the variables from `.env.template`
5. Fill the variables with WordPress, Woocommerce and SMTP information
4. Start the development server: `npm run dev`

## Scripts

- `dev`: Starts the development server and watch for changes in `.ts` and compiled `.js` files.
- `start`: Starts the server with the compiled JavaScript code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Xlsx](https://sheetjs.com/)
- [Nodemailer](https://github.com/nodemailer/nodemailer)
- [Nodeschedule](https://github.com/node-schedule/node-schedule)
