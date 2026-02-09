// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   template: `
//     <section class="hero">
//       <div class="container">
//         <div class="hero-content">
//           <div class="badge">Professional Developer</div>
//           <h1 class="hero-title">
//             Hello, I'm <span class="highlight">Your Name</span> 
//             <span class="wave">👋</span>
//           </h1>
//           <p class="hero-subtitle">Angular Developer</p>
//           <p class="hero-description">
//             Building scalable, performant web applications with modern Angular, 
//             TypeScript, and best practices in software engineering.
//           </p>
//           <div class="hero-actions">
//             <a href="#contact" class="btn btn-primary">
//               <span>Get In Touch</span>
//               <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
//                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//               </svg>
//             </a>
//             <a href="#projects" class="btn btn-secondary">View Projects</a>
//           </div>
//           <div class="tech-stack">
//             <span class="tech-label">Tech Stack:</span>
//             <div class="tech-icons">
//               <span class="tech-icon angular">Angular</span>
//               <span class="tech-icon typescript">TypeScript</span>
//               <span class="tech-icon rxjs">RxJS</span>
//               <span class="tech-icon html">HTML5</span>
//               <span class="tech-icon css">CSS3</span>
//             </div>
//           </div>
//         </div>
//         <div class="hero-visual">
//           <div class="code-snippet">
//             <div class="code-header">
//               <div class="code-dots">
//                 <span class="dot red"></span>
//                 <span class="dot yellow"></span>
//                 <span class="dot green"></span>
//               </div>
//               <span class="code-filename">app.component.ts</span>
//             </div>
//             <pre class="code-content"><code>@Component(&#123;
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     &lt;h1&gt;{{title}}&lt;/h1&gt;
//     &lt;router-outlet&gt;&lt;/router-outlet&gt;
//   `
// &#125;)
// export class AppComponent &#123;
//   title = 'Modern Angular App';
// &#125;</code></pre>
//           </div>
//         </div>
//       </div>
//     </section>
//   `,
//   styleUrls: ['./home.css']
// })
// export class HomeComponent {}
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
title: any;
}