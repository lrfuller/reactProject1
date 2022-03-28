const Local = {
  save: (list) => {
    localStorage.setItem('rgbApp', JSON.stringify(list));
  },
  load: () => {
    try {
      if (localStorage.getItem('rgbApp') == 'undefined' || localStorage.getItem('rgbApp') == null )
        localStorage.setItem('rgbApp', JSON.stringify([]));
      
      return JSON.parse(localStorage.getItem('rgbApp'));
    } catch(exception) {
      console.log(exception);
      return [];
    }
  },
};

export default Local;
