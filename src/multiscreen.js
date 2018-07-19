  // wait ms milliseconds
  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function hello() {
    alert('function call');
    await wait(5000);
  }


  var tour = new Shepherd.Tour({
    defaults: {
      classes: 'shepherd-theme-arrows',
      //buttons: false,
      scrollTo: true,
      showCancelLink: true
    }
  });

  tour.addStep('Dashboard', {
    title: 'Hero',
    text: 'Click on the tile see the details',
    attachTo: '.module bottom',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
      {
        text: 'next',
        classes: 'shepherd-button-example-primary',
        action: function()
        {
          goHome();
          tour.next();
        } ,
        // events: {
        //   click: function () {
        //   return  window.location.href='/heroes';
        //   }
        // }
      },
      {
        text: 'End Tour',
        classes: 'shepherd-button-example-primary',
        action: tour.cancel
      }
    ]
  });
  tour.addStep('HeroList', {
    title: 'Hero Name',
    text: 'Click here to see the hero derails',
    attachTo: '.badge right',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-example-primary',
        action: tour.back
      }, {
        text: 'Next',
        action: tour.next,
        classes: 'shepherd-button-example-primary'
      },
      {
        text: 'End Tour',
        classes: 'shepherd-button-example-primary',
        action: tour.cancel
      }
    ]
  });
  tour.addStep('EditHeroDetail', {
    title: 'Hero Name',
    text: 'Edit the Hero Name here',
    attachTo: '#lblEditName right',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
      {
        text: 'Back',
        classes: 'shepherd-button-example-primary',
        action: tour.back
      }, {
        text: 'Next',
        action: tour.next,
        classes: 'shepherd-button-example-primary'
      },
      {
        text: 'End Tour',
        classes: 'shepherd-button-example-primary',
        action: tour.cancel
      }
    ]
  });
  tour.addStep('GoBack', {
    title: 'Last Name',
    text: 'Click here to go back to previous screen',
    attachTo: '#btnGoback bottom',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
      {
        text: 'Back',
        action: tour.back,
        classes: 'shepherd-button-example-primary'
      }, {
        text: 'Exit',
        classes: 'shepherd-button-secondary',
        action: function () {
          return tour.hide();
        }
      }
    ]
  });
  tour.start();

  function call() {
    //if (First.isOpen()) {
    Shepherd.activeTour.next();
    //}
  };
