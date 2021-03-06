class ThankYou {

    constructor() {
      this.continueButton = createButton('Proceed to next Donation');
      this.title1 = createElement('h1');
      this.profileButton=createButton('Profile');
      this.signOutButton=createButton('Sign Out');
    }
    hide(){
      this.continueButton.hide();
      this.title1.hide();
      this.profileButton.hide();
      this.signOutButton.hide();
    }
  
    display()
    {
      this.title1.html("Thank You for your Donation(s)!");
      this.title1.position(displayWidth/2 - 250, displayHeight/2 - 400);

      this.continueButton.position(displayWidth/2 - 120, displayHeight/2 - 300);

      this.profileButton.position(1300, displayHeight/2 - 400);
      this.signOutButton.position(1295, displayHeight/2-370);

      this.signOutButton.mousePressed(()=>{
        thankYouScreen.hide();
        welcomeScreen=new Welcome();
        welcomeScreen.display();
      })
      this.profileButton.mousePressed(()=>{
        thankYouScreen.hide();
        profileScreen=new Profile();
        profileScreen.display();
      })

      this.continueButton.mousePressed(()=>{
        thankYouScreen.hide();
        donateScreen=new Donate();
        donateScreen.display();
      })
    }
  }
  