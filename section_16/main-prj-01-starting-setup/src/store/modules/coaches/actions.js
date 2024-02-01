export default {
  registerCoach(context, data) {
    let userId = (Math.random() + 1).toString(36).substring(7);
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };


    try {
      (async () => {
        const response = await fetch(
          `https://vue-http-demo-3d0d0-default-rtdb.firebaseio.com/coaches/${userId}.json`,
          {
            method: 'PUT',
            body: JSON.stringify(coachData),
          }
        );
        const responseData = await response.json();
        console.log(responseData);
      })();
    } catch (error) {
      console.log(error);
    }

    context.commit('registerCoach', {
      ...coachData,
      userId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-http-demo-3d0d0-default-rtdb.firebaseio.com/coaches.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log('error');
    }

    const coaches = [];

    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      coaches.push(coach)
    }

    context.commit('setCoaches', coaches)
    console.log(coaches)
  },
};
