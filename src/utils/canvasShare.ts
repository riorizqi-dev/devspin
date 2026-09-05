import { type ProjectIdea, CATEGORY_LABELS, DIFFICULTY_CONFIG } from '../data/projectsData';

export const generateProjectCardImage = async (project: ProjectIdea): Promise<Blob> => {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  // 1. Background gradient (Obsidian arcade)
  const bgGrad = ctx.createLinearGradient(0, 0, 1200, 630);
  bgGrad.addColorStop(0, '#07090e');
  bgGrad.addColorStop(0.5, '#0b0f17');
  bgGrad.addColorStop(1, '#111723');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 630);

  // Subtle glow spots
  const glowGrad = ctx.createRadialGradient(100, 100, 10, 100, 100, 450);
  glowGrad.addColorStop(0, 'rgba(0, 229, 255, 0.12)');
  glowGrad.addColorStop(1, 'rgba(0, 229, 255, 0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(0, 0, 1200, 630);

  const glowAmber = ctx.createRadialGradient(1100, 500, 10, 1100, 500, 450);
  glowAmber.addColorStop(0, 'rgba(255, 179, 0, 0.1)');
  glowAmber.addColorStop(1, 'rgba(255, 179, 0, 0)');
  ctx.fillStyle = glowAmber;
  ctx.fillRect(0, 0, 1200, 630);

  // Border frame
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.lineWidth = 3;
  ctx.strokeRect(30, 30, 1140, 570);

  // Corner accents
  ctx.strokeStyle = '#00e5ff';
  ctx.lineWidth = 4;
  // Top-left
  ctx.beginPath();
  ctx.moveTo(25, 65);
  ctx.lineTo(25, 25);
  ctx.lineTo(65, 25);
  ctx.stroke();

  // Bottom-right
  ctx.beginPath();
  ctx.moveTo(1175, 565);
  ctx.lineTo(1175, 605);
  ctx.lineTo(1135, 605);
  ctx.stroke();

  // 2. Header: Logo & Tagline
  ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#00e5ff';
  ctx.fillText('DEVSPIN', 70, 85);

  ctx.font = '500 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Project Idea Matchmaker', 235, 85);

  // Category & Difficulty Badges
  const catInfo = CATEGORY_LABELS[project.category] || { label: project.category, color: '#00e5ff' };
  const diffInfo = DIFFICULTY_CONFIG[project.difficulty] || { label: project.difficulty };

  // Category badge
  ctx.fillStyle = 'rgba(0, 229, 255, 0.15)';
  ctx.fillRect(70, 120, 220, 38);
  ctx.strokeStyle = catInfo.color;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(70, 120, 220, 38);
  ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#f8fafc';
  ctx.fillText(catInfo.label, 85, 145);

  // Difficulty badge
  const diffColor = project.difficulty === 'pemula' ? '#00e676' : project.difficulty === 'menengah' ? '#ffb300' : '#ff1744';
  ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
  ctx.fillRect(305, 120, 140, 38);
  ctx.strokeStyle = diffColor;
  ctx.strokeRect(305, 120, 140, 38);
  ctx.fillStyle = diffColor;
  ctx.fillText(diffInfo.label, 325, 145);

  // Duration badge
  ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
  ctx.fillRect(460, 120, 150, 38);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.strokeRect(460, 120, 150, 38);
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(project.duration, 485, 145);

  // 3. Project Title
  ctx.font = 'bold 44px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#ffffff';

  // Wrap title if needed
  const titleWords = project.title.split(' ');
  let titleLine = '';
  let titleY = 215;
  for (let n = 0; n < titleWords.length; n++) {
    const testLine = titleLine + titleWords[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 1050 && n > 0) {
      ctx.fillText(titleLine, 70, titleY);
      titleLine = titleWords[n] + ' ';
      titleY += 50;
    } else {
      titleLine = testLine;
    }
  }
  ctx.fillText(titleLine, 70, titleY);

  // 4. Description
  ctx.font = '400 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#cbd5e1';
  const descWords = project.description.split(' ');
  let descLine = '';
  let descY = titleY + 45;
  for (let n = 0; n < descWords.length; n++) {
    const testLine = descLine + descWords[n] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > 1050 && n > 0) {
      ctx.fillText(descLine, 70, descY);
      descLine = descWords[n] + ' ';
      descY += 34;
    } else {
      descLine = testLine;
    }
  }
  ctx.fillText(descLine, 70, descY);

  // 5. Tech Stack Pills
  let stackX = 70;
  const stackY = Math.max(descY + 40, 435);

  ctx.font = '600 16px "JetBrains Mono", monospace';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('TECH STACK:', stackX, stackY + 22);
  stackX += 130;

  project.stack.forEach((tech) => {
    ctx.font = '500 16px "JetBrains Mono", monospace';
    const techWidth = ctx.measureText(tech).width + 24;

    ctx.fillStyle = 'rgba(34, 45, 66, 0.7)';
    ctx.fillRect(stackX, stackY, techWidth, 34);
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(stackX, stackY, techWidth, 34);

    ctx.fillStyle = '#00e5ff';
    ctx.fillText(tech, stackX + 12, stackY + 23);

    stackX += techWidth + 12;
  });

  // 6. Highlight Box
  const highlightY = stackY + 50;
  ctx.fillStyle = 'rgba(11, 15, 23, 0.9)';
  ctx.fillRect(70, highlightY, 1060, 48);
  ctx.strokeStyle = 'rgba(255, 179, 0, 0.4)';
  ctx.strokeRect(70, highlightY, 1060, 48);

  ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#ffb300';
  ctx.fillText('FITUR UNGGULAN:', 88, highlightY + 30);

  ctx.font = '400 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#e2e8f0';
  ctx.fillText(project.highlights, 245, highlightY + 30);

  // 7. Footer
  ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Temukan ratusan ide project developer di devspin.app', 70, 570);

  ctx.font = '600 16px "JetBrains Mono", monospace';
  ctx.fillStyle = '#00e5ff';
  ctx.fillText('SPIN IDEMU SEKARANG', 920, 570);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Canvas blob generation failed'));
    }, 'image/png');
  });
};

export const downloadCardImage = async (project: ProjectIdea) => {
  const blob = await generateProjectCardImage(project);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `devspin-${project.id}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const copyCardImageToClipboard = async (project: ProjectIdea): Promise<boolean> => {
  try {
    const blob = await generateProjectCardImage(project);
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
    return true;
  } catch {
    return false;
  }
};
