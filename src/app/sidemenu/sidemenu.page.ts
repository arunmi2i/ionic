import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  constructor(private platform: Platform, public menuController: MenuController) { 
    window.onresize = (e => {
      console.log(e,"  width", platform.width());
      setTimeout(() => {
        if(platform.width() < 480) {
          console.log(platform.width());
          this.menuController.open();
        } else {
          // if(this.menuController.isOpen()) {
            this.menuController.close();
          // }
          // location.reload();
        }
      }, 1000);
    });
   }

  ngOnInit() {
    
  }
  public width = this.platform.width();

  onResize(event) {
    console.log(event);
    console.log("cds",this.platform);
  }
}
