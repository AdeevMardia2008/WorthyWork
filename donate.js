class Donate {

    constructor() {
      this.title1=createElement('h1');
      this.item1=createCheckbox("Electronics",false);
      this.item2=createCheckbox("Garments and Footwear",false);
      this.item3=createCheckbox("Household Items",false);
      this.item4=createCheckbox("Furniture",false);
      this.item5=createCheckbox("Crockery and Cutlery",false);
      this.item6=createCheckbox("Games and Toys",false);
      this.item7=createCheckbox("Books",false);
      this.item8=createCheckbox("Sporting Goods",false);
      this.item9=createCheckbox("Other",false);
      this.donateButton=createButton('Donate');
      this.profileButton=createButton('Profile');
      this.signOutButton=createButton('Sign Out');
      this.contactButton=createButton('Contact Us');
    }
    hide(){
        this.title1.hide();
        this.item1.hide();
        this.item2.hide();
        this.item3.hide();
        this.item4.hide();
        this.item5.hide();
        this.item6.hide();
        this.item7.hide();
        this.item8.hide();
        this.item9.hide();
        this.donateButton.hide();
        this.profileButton.hide();
      this.signOutButton.hide();
      this.contactButton.hide();
    }
  
    display()
    {
      this.title1.html("Please Select atleast one item to Donate");
      this.title1.position(displayWidth/2 - 300, displayHeight/2 - 160);
      this.donateButton.position(displayWidth/2 - 70, displayHeight/2 + 265);
      this.item1.position(350,400);
      this.item2.position(650,400);
      this.item3.position(1020,400);
      this.item4.position(350,520);
      this.item5.position(650,520);
      this.item6.position(1020,520);
      this.item7.position(350,640);
      this.item8.position(650,640);
      this.item9.position(1020,640);

      

      this.profileButton.position(1300, displayHeight/2 - 400);
      this.signOutButton.position(1295, displayHeight/2-370);

      this.contactButton.position(1290,displayHeight/2-340);
      this.contactButton.mousePressed(()=>{
      donateScreen.hide();
        contactScreen=new Contact();
        contactScreen.display();
      })

      this.signOutButton.mousePressed(()=>{
        donateScreen.hide();
        welcomeScreen=new Welcome();
        welcomeScreen.display();
      })
      this.profileButton.mousePressed(()=>{
        donateScreen.hide();
        profileScreen=new Profile();
        profileScreen.display();
      })

      this.donateButton.mousePressed(()=>{
        if(this.item1.checked()){
          donationItems+="Electronics/";
        }
        if(this.item2.checked()){
          donationItems+="Garments and Footwear/";
        }
          console.log(donationItems);
        donateScreen.hide();
        dateScreen=new Date1();
        dateScreen.display();

      })
    }
  }
  