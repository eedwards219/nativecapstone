const initialState = {
  loggedInUser: {
    name: "Rhodes Mcconnell",
    email: "Terrell@Howard.com",
    phoneNumber: 2517612593,
    isAvailable: true,
    vehicle: "GALLAXIA",
    rideConfirmed: true
  }
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default authReducer;
