var UserAccount = /** @class */ (function () {
    function UserAccount(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
    UserAccount.prototype.getProfile = function () {
        console.log("Username: ".concat(this.username));
        console.log("Email: ".concat(this.email));
    };
    return UserAccount;
}());
var user1 = new UserAccount(1, "achmadtirto", "achmadts@email.com");
user1.getProfile();
