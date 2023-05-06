"use strict";

const bcrypt = require("bcrypt");
/* @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    email: "fatur@gmail.com",
                    password: await bcrypt.hash("123456", 10), //setup with bcrypt encrypt
                    role: "superadmin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("Users", null, {});
    },
};
