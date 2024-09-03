export function setClipPath(img: HTMLImageElement, curveIntensity = 0.025) {
  const applyClipPath = () => {
    const { width, height } = img;

    const path = `
                M${width / 2},0 
                C${(width / 2) * curveIntensity},0 0,${
      (height / 2) * curveIntensity
    } 0,${height / 2} 
                L0,${height / 2} 
                C0,${height - (height / 2) * curveIntensity} ${
      (width / 2) * curveIntensity
    },${height} ${width / 2},${height} 
                L${width / 2},${height} 
                C${width - (width / 2) * curveIntensity},${height} ${width},${
      height - (height / 2) * curveIntensity
    } ${width},${height / 2} 
                L${width},${height / 2} 
                C${width},${(height / 2) * curveIntensity} ${
      width - (width / 2) * curveIntensity
    },0 ${width / 2},0 
                Z
            `
      .replace(/\s+/g, " ")
      .trim();

    img.style.clipPath = `path('${path}')`;
  };

  if (img.complete) {
    applyClipPath();
  } else {
    img.onload = applyClipPath;
  }

  // Reapply on window resize
  window.addEventListener("resize", applyClipPath);
}
