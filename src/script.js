document.addEventListener("DOMContentLoaded", function () {

 setTimeout(()=>{
  function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    console.log("main", document.querySelector("#main"));
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },

      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }

  locomotive();
  const canvas = document.querySelector("canvas");
  console.log('canvaaa', canvas)
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  function files(index) {
    var data = `
       ./img/male/male0001.png
       ./img/male/male0002.png
       ./img/male/male0003.png
       ./img/male/male0004.png
       ./img/male/male0005.png
       ./img/male/male0006.png
       ./img/male/male0007.png
       ./img/male/male0008.png
       ./img/male/male0009.png
       ./img/male/male0010.png
       ./img/male/male0011.png
       ./img/male/male0012.png
       ./img/male/male0013.png
       ./img/male/male0014.png
       ./img/male/male0015.png
       ./img/male/male0016.png
       ./img/male/male0017.png
       ./img/male/male0018.png
       ./img/male/male0019.png
       ./img/male/male0020.png
       ./img/male/male0021.png
       ./img/male/male0022.png
       ./img/male/male0023.png
       ./img/male/male0024.png
       ./img/male/male0025.png
       ./img/male/male0026.png
       ./img/male/male0027.png
       ./img/male/male0028.png
       ./img/male/male0029.png
       ./img/male/male0030.png
       ./img/male/male0031.png
       ./img/male/male0032.png
       ./img/male/male0033.png
       ./img/male/male0034.png
       ./img/male/male0035.png
       ./img/male/male0036.png
       ./img/male/male0037.png
       ./img/male/male0038.png
       ./img/male/male0039.png
       ./img/male/male0040.png
       ./img/male/male0041.png
       ./img/male/male0042.png
       ./img/male/male0043.png
       ./img/male/male0044.png
       ./img/male/male0045.png
       ./img/male/male0046.png
       ./img/male/male0047.png
       ./img/male/male0048.png
       ./img/male/male0049.png
       ./img/male/male0050.png
       ./img/male/male0051.png
       ./img/male/male0052.png
       ./img/male/male0053.png
       ./img/male/male0054.png
       ./img/male/male0055.png
       ./img/male/male0056.png
       ./img/male/male0057.png
       ./img/male/male0058.png
       ./img/male/male0059.png
       ./img/male/male0060.png
       ./img/male/male0061.png
       ./img/male/male0062.png
       ./img/male/male0063.png
       ./img/male/male0064.png
       ./img/male/male0065.png
       ./img/male/male0066.png
       ./img/male/male0067.png
       ./img/male/male0068.png
       ./img/male/male0069.png
       ./img/male/male0070.png
       ./img/male/male0071.png
       ./img/male/male0072.png
       ./img/male/male0073.png
       ./img/male/male0074.png
       ./img/male/male0075.png
       ./img/male/male0076.png
       ./img/male/male0077.png
       ./img/male/male0078.png
       ./img/male/male0079.png
       ./img/male/male0080.png
       ./img/male/male0081.png
       ./img/male/male0082.png
       ./img/male/male0083.png
       ./img/male/male0084.png
       ./img/male/male0085.png
       ./img/male/male0086.png
       ./img/male/male0087.png
       ./img/male/male0088.png
       ./img/male/male0089.png
       ./img/male/male0090.png
       ./img/male/male0091.png
       ./img/male/male0092.png
       ./img/male/male0093.png
       ./img/male/male0094.png
       ./img/male/male0095.png
       ./img/male/male0096.png
       ./img/male/male0097.png
       ./img/male/male0098.png
       ./img/male/male0099.png
       ./img/male/male0100.png
       ./img/male/male0101.png
       ./img/male/male0102.png
       ./img/male/male0103.png
       ./img/male/male0104.png
       ./img/male/male0105.png
       ./img/male/male0106.png
       ./img/male/male0107.png
       ./img/male/male0108.png
       ./img/male/male0109.png
       ./img/male/male0110.png
       ./img/male/male0111.png
       ./img/male/male0112.png
       ./img/male/male0113.png
       ./img/male/male0114.png
       ./img/male/male0115.png
       ./img/male/male0116.png
       ./img/male/male0117.png
       ./img/male/male0118.png
       ./img/male/male0119.png
       ./img/male/male0120.png
       ./img/male/male0121.png
       ./img/male/male0122.png
       ./img/male/male0123.png
       ./img/male/male0124.png
       ./img/male/male0125.png
       ./img/male/male0126.png
       ./img/male/male0127.png
       ./img/male/male0128.png
       ./img/male/male0129.png
       ./img/male/male0130.png
       ./img/male/male0131.png
       ./img/male/male0132.png
       ./img/male/male0133.png
       ./img/male/male0134.png
       ./img/male/male0135.png
       ./img/male/male0136.png
       ./img/male/male0137.png
       ./img/male/male0138.png
       ./img/male/male0139.png
       ./img/male/male0140.png
       ./img/male/male0141.png
       ./img/male/male0142.png
       ./img/male/male0143.png
       ./img/male/male0144.png
       ./img/male/male0145.png
       ./img/male/male0146.png
       ./img/male/male0147.png
       ./img/male/male0148.png
       ./img/male/male0149.png
       ./img/male/male0150.png
       ./img/male/male0151.png
       ./img/male/male0152.png
       ./img/male/male0153.png
       ./img/male/male0154.png
       ./img/male/male0155.png
       ./img/male/male0156.png
       ./img/male/male0157.png
       ./img/male/male0158.png
       ./img/male/male0159.png
       ./img/male/male0160.png
       ./img/male/male0161.png
       ./img/male/male0162.png
       ./img/male/male0163.png
       ./img/male/male0164.png
       ./img/male/male0165.png
       ./img/male/male0166.png
       ./img/male/male0167.png
       ./img/male/male0168.png
       ./img/male/male0169.png
       ./img/male/male0170.png
       ./img/male/male0171.png
       ./img/male/male0172.png
       ./img/male/male0173.png
       ./img/male/male0174.png
       ./img/male/male0175.png
       ./img/male/male0176.png
       ./img/male/male0177.png
       ./img/male/male0178.png
       ./img/male/male0179.png
       ./img/male/male0180.png
       ./img/male/male0181.png
       ./img/male/male0182.png
       ./img/male/male0183.png
       ./img/male/male0184.png
       ./img/male/male0185.png
       ./img/male/male0186.png
       ./img/male/male0187.png
       ./img/male/male0188.png
       ./img/male/male0189.png
       ./img/male/male0190.png
       ./img/male/male0191.png
       ./img/male/male0192.png
       ./img/male/male0193.png
       ./img/male/male0194.png
       ./img/male/male0195.png
       ./img/male/male0196.png
       ./img/male/male0197.png
       ./img/male/male0198.png
       ./img/male/male0199.png
       ./img/male/male0200.png
       ./img/male/male0201.png
       ./img/male/male0202.png
       ./img/male/male0203.png
       ./img/male/male0204.png
       ./img/male/male0205.png
       ./img/male/male0206.png
       ./img/male/male0207.png
       ./img/male/male0208.png
       ./img/male/male0209.png
       ./img/male/male0210.png
       ./img/male/male0211.png
       ./img/male/male0212.png
       ./img/male/male0213.png
       ./img/male/male0214.png
       ./img/male/male0215.png
       ./img/male/male0216.png
       ./img/male/male0217.png
       ./img/male/male0218.png
       ./img/male/male0219.png
       ./img/male/male0220.png
       ./img/male/male0221.png
       ./img/male/male0222.png
       ./img/male/male0223.png
       ./img/male/male0224.png
       ./img/male/male0225.png
       ./img/male/male0226.png
       ./img/male/male0227.png
       ./img/male/male0228.png
       ./img/male/male0229.png
       ./img/male/male0230.png
       ./img/male/male0231.png
       ./img/male/male0232.png
       ./img/male/male0233.png
       ./img/male/male0234.png
       ./img/male/male0235.png
       ./img/male/male0236.png
       ./img/male/male0237.png
       ./img/male/male0238.png
       ./img/male/male0239.png
       ./img/male/male0240.png
       ./img/male/male0241.png
       ./img/male/male0242.png
       ./img/male/male0243.png
       ./img/male/male0244.png
       ./img/male/male0245.png
       ./img/male/male0246.png
       ./img/male/male0247.png
       ./img/male/male0248.png
       ./img/male/male0249.png
       ./img/male/male0250.png
       ./img/male/male0251.png
       ./img/male/male0252.png
       ./img/male/male0253.png
       ./img/male/male0254.png
       ./img/male/male0255.png
       ./img/male/male0256.png
       ./img/male/male0257.png
       ./img/male/male0258.png
       ./img/male/male0259.png
       ./img/male/male0260.png
       ./img/male/male0261.png
       ./img/male/male0262.png
       ./img/male/male0263.png
       ./img/male/male0264.png
       ./img/male/male0265.png
       ./img/male/male0266.png
       ./img/male/male0267.png
       ./img/male/male0268.png
       ./img/male/male0269.png
       ./img/male/male0270.png
       ./img/male/male0271.png
       ./img/male/male0272.png
       ./img/male/male0273.png
       ./img/male/male0274.png
       ./img/male/male0275.png
       ./img/male/male0276.png
       ./img/male/male0277.png
       ./img/male/male0278.png
       ./img/male/male0279.png
       ./img/male/male0280.png
       ./img/male/male0281.png
       ./img/male/male0282.png
       ./img/male/male0283.png
       ./img/male/male0284.png
       ./img/male/male0285.png
       ./img/male/male0286.png
       ./img/male/male0287.png
       ./img/male/male0288.png
       ./img/male/male0289.png
       ./img/male/male0290.png
       ./img/male/male0291.png
       ./img/male/male0292.png
       ./img/male/male0293.png
       ./img/male/male0294.png
       ./img/male/male0295.png
       ./img/male/male0296.png
       ./img/male/male0297.png
       ./img/male/male0298.png
       ./img/male/male0299.png
       ./img/male/male0300.png
   `;
    return data.split("\n")[index];
  }

  const frameCount = 300;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });

  gsap.to("#page1", {
    scrollTrigger: {
      trigger: `#page1`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });
  gsap.to("#page2", {
    scrollTrigger: {
      trigger: `#page2`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });
  gsap.to("#page3", {
    scrollTrigger: {
      trigger: `#page3`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });
 },2000)
});
