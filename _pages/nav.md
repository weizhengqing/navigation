---
layout: page
title: 导航
permalink: /nav/
---

<link rel="stylesheet" href="/assets/css/nav-style.css">

<div class="page-wrapper">
  <div class="main-content">
    <input type="text" class="search-box" id="searchBox" placeholder="搜索导航..." onkeyup="searchLinks()">

    <div class="sidebar-nav">
      <a href="#literature">文献检索</a>
      <a href="#open-access">开放获取</a>
      <a href="#tuc">TUC 常用</a>
      <a href="#tools">科研工具</a>
      <a href="#life">生活服务</a>
      <a href="#ai">AI工具</a>
    </div>

    <div class="nav-container">
      <div class="nav-section" id="literature">
        <div class="nav-title">文献检索</div>
        <div class="nav-links">
          <a href="https://www.webofscience.com/" class="nav-link">Web of Science</a>
          <a href="https://scholar.google.com/" class="nav-link">Google Scholar</a>
          <a href="https://www.sciencedirect.com/" class="nav-link">Science Direct</a>
          <a href="https://link.springer.com/" class="nav-link">Springer</a>
          <a href="https://ieeexplore.ieee.org/" class="nav-link">IEEE Xplore</a>
          <a href="https://www.scopus.com/" class="nav-link">Scopus</a>
          <a href="https://arxiv.org/" class="nav-link">arXiv</a>
          <a href="https://www.proquest.com/" class="nav-link">ProQuest</a>
          <a href="https://www.emerald.com/insight/" class="nav-link">Emerald</a>
        </div>
      </div>

      <div class="nav-section" id="open-access">
        <div class="nav-title">开放获取</div>
        <div class="nav-links">
          <a href="https://sci-hub.se/" class="nav-link">Sci-Hub</a>
          <a href="https://z-library.sk/" class="nav-link">Z-library</a>
          <a href="https://libgen.is/" class="nav-link">LibGen</a>
          <a href="https://www.researchgate.net/" class="nav-link">ResearchGate</a>
          <a href="https://zh.annas-archive.li/" class="nav-link">安娜的档案</a>
          <a href="https://ac.scmor.com/" class="nav-link">學術導航</a>
        </div>
      </div>

      <div class="nav-section" id="tuc">
        <div class="nav-title">TUC 常用</div>
        <div class="nav-links">
          <a href="https://www.tu-chemnitz.de/" class="nav-link">TU Chemnitz</a>
          <a href="https://campus.tu-chemnitz.de/" class="nav-link">SB-Service</a>
          <a href="https://mail.tu-chemnitz.de/" class="nav-link">TUC Mail</a>
          <a href="https://tuc.cloud/" class="nav-link">TUC Cloud</a>
          <a href="https://www.swcz.de/bilderspeiseplan/" class="nav-link">Speiseplan</a>
          <a href="https://bildungsportal.sachsen.de/opal/" class="nav-link">OPAL</a>
        </div>
      </div>

      <div class="nav-section" id="tools">
        <div class="nav-title">科研工具</div>
        <div class="nav-links">
          <a href="https://www.abinit.org/" class="nav-link">Abinit</a>
          <a href="https://www.lammps.org/" class="nav-link">LAMMPS</a>
          <a href="https://www.python.org/" class="nav-link">Python</a>
          <a href="https://jupyter.org/" class="nav-link">Jupyter</a>
          <a href="https://www.overleaf.com/" class="nav-link">Overleaf</a>
          <a href="https://github.com/" class="nav-link">GitHub</a>
          <a href="https://gitlab.hrz.tu-chemnitz.de/" class="nav-link">GitLab TUC</a>
        </div>
      </div>

      <div class="nav-section" id="life">
        <div class="nav-title">生活服务</div>
        <div class="nav-links">
          <a href="https://www.booking.com/" class="nav-link">Booking</a>
          <a href="https://www.airbnb.com/" class="nav-link">Airbnb</a>
          <a href="https://www.bahn.de/" class="nav-link">德铁DB</a>
          <a href="https://www.cvag.de/" class="nav-link">CVAG</a>
          <a href="https://www.ctrip.com/" class="nav-link">携程</a>
          <a href="https://www.skyscanner.de/" class="nav-link">Skyscanner</a>
        </div>
      </div>

      <div class="nav-section" id="ai">
        <div class="nav-title">AI工具</div>
        <div class="nav-links">
          <a href="https://chat.openai.com/" class="nav-link">ChatGPT</a>
          <a href="https://claude.ai/" class="nav-link">Claude</a>
          <a href="https://www.perplexity.ai/" class="nav-link">Perplexity</a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
function searchLinks() {
  const searchText = document.getElementById('searchBox').value.toLowerCase();
  const sections = document.getElementsByClassName('nav-section');
  
  for (let section of sections) {
    const links = section.getElementsByClassName('nav-link');
    let hasVisibleLinks = false;
    
    for (let link of links) {
      const text = link.textContent.toLowerCase();
      if (text.includes(searchText)) {
        link.style.display = 'block';
        hasVisibleLinks = true;
      } else {
        link.style.display = 'none';
      }
    }
    
    section.style.display = hasVisibleLinks ? 'block' : 'none';
  }
}

// 平滑滚动
document.querySelectorAll('.sidebar-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
</script> 