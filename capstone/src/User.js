export function createUser(email, password, firstname = '', lastname = '', address= '', contact= '', nric='', dob= '') {
    const newUser = {
      email,
      password,
      firstname,
      lastname,
      address,
      contact,
      nric,
      dob
    };
  
    const users = getUsers();
    users.push(newUser);
    saveUsers(users);
  
    return newUser;
  }

  
  export function getUsers() {
    const usersJSON = localStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
  }
  
  export function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  export function updateUser(email, updatedData) {
    const users = getUsers();
  
    // Find the user by their email
    const updatedUsers = users.map((user) => {
      if (user.email === email) {
        return { ...user, ...updatedData }; // Merge updatedData into the user's existing data
      }
      return user;
    });
  
    saveUsers(updatedUsers); // Save the updated users array back to localStorage
  }