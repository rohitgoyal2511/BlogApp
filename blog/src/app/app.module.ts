import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {WebServiceService} from './web-service.service';
import {HttpModule} from "@angular/http";
import { UpdateComponent } from './update/update.component';
import { TruncatePipePipe } from './truncate-pipe.pipe';
import { CompleteBlogComponent } from './complete-blog/complete-blog.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    NewBlogComponent,
    BlogComponent,
    LoginComponent,
    UpdateComponent,
    TruncatePipePipe,
    CompleteBlogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        // full : makes sure the path is absolute path
        { path: '', redirectTo: '/', pathMatch: 'full' },
        {path: '', component : LoginComponent},
        {path: 'blog', component : BlogComponent},
         {path : 'newBlog', component : NewBlogComponent},
        {path : 'update', component : UpdateComponent},
        {path : 'completeBlog', component : CompleteBlogComponent}
        // { path: '', component: HaryanaComponent
          // children : [{path:'', component: HaryanaInfoComponent},
          //   {path: 'hisar', component:HisarComponent},
          //   {path: 'rohtak', component:RohtakComponent},
          //   {path: 'kurukshetra', component: KurukshetraComponent},
          // ]},
  ]),
    ],
  providers: [WebServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
