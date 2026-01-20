// Interface User
interface User {
  id: number;
  username: string;
  email: string;
}

class UserAccount implements User {
  id: number;
  username: string;
  email: string;

  constructor(id: number, username: string, email: string) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  getProfile(): void {
    console.log(`Username: ${this.username}`);
    console.log(`Email: ${this.email}`);
  }
}

const user1 = new UserAccount(1, "achmadtirto", "achmadts@email.com");
user1.getProfile();
