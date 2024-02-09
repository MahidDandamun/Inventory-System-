Inventory System Application README

Theiapollo created By Black Python Group

Members: Mahid Dandamun
         Mark Angelo Galit
         Joshua Sundiam
         Aldrin Tilos
         Jay anne Marie Tuatis
         Kylene Shane Varona



This Inventory system application is designed for scented candle businesses. It includes functions to create accounts, recover forgotten password, login and logut, secured page routings, generates appropriate errors, generate reports, store information about raw materials, products, warehouse locations, and current capacities. The project utilizes the Next.js framework as a full-stack framework, Prisma as its database, and Shadcn UI for its design.

Installation
To use this application, even though it is still under development, you may clone it using the following link: Inventory System Repository.

Prerequisites
You will need a git application to clone this repository. If you haven't installed Git yet, you can download it here.

---> CLONING THE PROJECT

1. Navigate to an empty folder where you want to save the application.
2. Right-click and select "gitbash here" (assuming you have already installed Git).
3. In the terminal that pops up, type the following command:

git clone https://github.com/MahidDandamun/Inventory-System-.git

4. After cloning the application, you can open the cloned folder in any code editor like VSCode.

Setting Up Dependencies
1. Open the project in VSCode or your preferred code editor.
2. Open the terminal within VSCode and run the following command to install all dependencies:

"npm install"  <---- just remove the quotation marks


---> CONFIGURATION

Create a file named .env in the root folder of the project.
Paste the following environment variables into the .env file:

DATABASE_URL="postgresql://dndmmhd:bq2PC9KIYDUt@ep-divine-bar-a56cgt60-pooler.us-east-2.aws.neon.tech/Theiapollo?sslmode=require&pgbouncer=true"
DIRECT_URL="postgresql://dndmmhd:bq2PC9KIYDUt@ep-divine-bar-a56cgt60.us-east-2.aws.neon.tech/Theiapollo?sslmode=require"
AUTH_SECRET="secret"
GITHUB_CLIENT_ID=a24f35224a562569e868
GITHUB_CLIENT_SECRET=c82165a653d9c53f79da2812d5c58b3be67fd54f
GOOGLE_CLIENT_ID=183500133742-4kcslgd9so1roolom5jq7u31dc2dkn3n.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
RESEND_API_KEY=re_WGubLJby_K1yydGP896pfCFjkr27AAhfo

---> RUNNING THE APPLICATION

"npm run dev"   <---- just remove the quotation marks

Visit localhost:3000 in your web browser.
Note: The application loads slowly during development mode since scripts and CSS files aren't yet purged.
Additionally, this project utilizes 2000+ modules to be functional.

Notes
The creators of this project were unable to finish the remaining functions of the system, particularly the CRUD operations. The developers faced challenges due to changing the database and a lack of better understanding of the Next.js framework and TypeScript, thankyou for understanding.


You may use this account for test purposes or you may login directly by just using your google acc or github acc.

username: dndmmhd@gmail.com
password: 123123 