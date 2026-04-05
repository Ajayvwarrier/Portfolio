import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  HostListener,
  OnDestroy,
  Renderer2
} from '@angular/core';

import { AboutComponent } from "../about/about";
import { SkillsComponent } from "../skills/skills";
import { ProjectsComponent } from "../projects/projects";
import { ContactComponent } from "../contact/contact";


@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],

})
export class HomeComponent implements AfterViewInit, OnDestroy {

  title: string = 'Welcome to My Portfolio';

  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  // private particles: Particle[] = [];
  private animationId: number = 0;

  private mouseX: number = 0;
  private mouseY: number = 0;
  private isMouseMoving: boolean = false;
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  
  // ================= INIT =================
  ngAfterViewInit() {
    this.initCanvas();
    // this.createParticles();
    // this.animate();

      setTimeout(() => {
    const sparks = this.el.nativeElement.querySelectorAll('.spark');
    sparks.forEach((spark: HTMLElement) => {
      this.renderer.addClass(spark, 'active');
    });
  }, 100);
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
  }

  // ================= RESIZE =================
  @HostListener('window:resize')
  public resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const container = canvas.parentElement;

    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    this.createParticles();
  }

  // ================= PARTICLES =================
  private createParticles() {
    const canvas = this.canvasRef.nativeElement;
    const particleCount = 50;

    // this.particles = [];

    for (let i = 0; i < particleCount; i++) {
      // this.particles.push(new Particle(
      //   Math.random() * canvas.width,
      //   Math.random() * canvas.height,
      //   Math.random() * 3 + 1,
      //   Math.random() * 2 - 1,
      //   Math.random() * 2 - 1,
      //   this.getRandomColor()
      // ));
    }
  }

  private getRandomColor(): string {
    const colors = [
      '#3b82f6',
      '#8b5cf6',
      '#ec489a',
      '#06b6d4',
      '#f59e0b',
      '#10b981'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // ================= ANIMATION =================
  private animate() {
    const canvas = this.canvasRef.nativeElement;
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw particles
    // for (let p of this.particles) {
    //   p.update(canvas.width, canvas.height);
    //   p.draw(this.ctx);
    // }

    // this.drawConnections();
    // this.applyMouseEffect();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  // ================= CONNECTION LINES =================
  // private drawConnections() {
  //   const maxDistance = 120;

  //   for (let i = 0; i < this.particles.length; i++) {
  //     for (let j = i + 1; j < this.particles.length; j++) {

  //       const dx = this.particles[i].x - this.particles[j].x;
  //       const dy = this.particles[i].y - this.particles[j].y;
  //       const distance = Math.sqrt(dx * dx + dy * dy);

  //       if (distance < maxDistance) {
  //         const opacity = 1 - (distance / maxDistance);

  //         this.ctx.beginPath();
  //         this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.3})`;
  //         this.ctx.lineWidth = 1;
  //         this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
  //         this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
  //         this.ctx.stroke();
  //       }
  //     }
  //   }
  // }

  // ================= MOUSE EFFECT =================
  // private applyMouseEffect() {
  //   if (!this.isMouseMoving) return;

  //   const maxDistance = 150;

  //   for (let p of this.particles) {
  //     const dx = p.x - this.mouseX;
  //     const dy = p.y - this.mouseY;
  //     const distance = Math.sqrt(dx * dx + dy * dy);

  //     if (distance < maxDistance) {
  //       const angle = Math.atan2(dy, dx);
  //       const force = (maxDistance - distance) / maxDistance * 2;

  //       p.x += Math.cos(angle) * force;
  //       p.y += Math.sin(angle) * force;
  //     }
  //   }
  // }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();

    this.mouseX = event.clientX - rect.left;
    this.mouseY = event.clientY - rect.top;
    this.isMouseMoving = true;

    clearTimeout((this as any).mouseTimeout);
    (this as any).mouseTimeout = setTimeout(() => {
      this.isMouseMoving = false;
    }, 100);
  }

  // ================= DESTROY =================
  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}


// ================= PARTICLE CLASS =================
class Particle {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public vx: number,
    public vy: number,
    public color: string
  ) {}

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.vx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.vy *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;

    ctx.fill();
    ctx.shadowBlur = 0;
  }
}