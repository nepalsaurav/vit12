<script>
  let canvas;
  let ctx;
  let img = null;
  let isDrawing = false;
  let points = [];
  let resultSrc = '';

  // Handle file input
  function handleFileInput(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  // Start drawing
  function startDrawing(event) {
    isDrawing = true;
    points = [];
    const rect = canvas.getBoundingClientRect();
    points.push({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }

  // Draw freeform path
  function draw(event) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    points = [...points, { x, y }];

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }

  // Stop drawing
  function stopDrawing() {
    isDrawing = false;
    ctx.closePath();
  }

  // Crop image
  function cropImage() {
    if (points.length < 3) return;
    const cropCanvas = document.createElement('canvas');
    const cropCtx = cropCanvas.getContext('2d');
    cropCanvas.width = canvas.width;
    cropCanvas.height = canvas.height;

    // Create clipping path
    cropCtx.beginPath();
    cropCtx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      cropCtx.lineTo(points[i].x, points[i].y);
    }
    cropCtx.closePath();
    cropCtx.clip();

    // Draw image in clipped area
    cropCtx.drawImage(img, 0, 0);

    // Update result
    resultSrc = cropCanvas.toDataURL('image/png');
  }
</script>

<style>
  canvas {
    border: 1px solid black;
  }
  img {
    margin-top: 10px;
  }
</style>

<main>
  <canvas bind:this={canvas} width="500" height="500" on:mousedown={startDrawing} on:mousemove={draw} on:mouseup={stopDrawing}></canvas>
  <button on:click={cropImage}>Crop</button>
  {#if resultSrc}
    <img src={resultSrc} alt="Cropped result" />
  {/if}
  <input type="file" accept="image/*" on:change={handleFileInput} />
</main>