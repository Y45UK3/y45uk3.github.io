(() => {
  const tech = [
    ['JavaScript','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',''],
    ['TypeScript','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',''],
    ['HTML','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',''],
    ['CSS','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',''],
    ['Node.js','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',''],
    ['Python','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',''],
    ['Git','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',''],
    ['GitHub','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg','logo-on-light'],
    ['VS Code','https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',''],
  ]

  const workIcons = [
    'trophy','workflow','bug','users-round','network','code-xml'
  ].map(name => 'https://cdn.jsdelivr.net/gh/lucide-icons/lucide@main/icons/' + name + '.svg')

  const principleIcons = ['wrench','route','refresh-cw']
    .map(name => 'https://cdn.jsdelivr.net/gh/lucide-icons/lucide@main/icons/' + name + '.svg')

  const byText = (selector, text) => Array.from(document.querySelectorAll(selector)).find(el => el.textContent.includes(text))

  function applyPatch() {
    const header = document.querySelector('.site-header')
    if (!header || !document.querySelector('.hero-system')) return false
    if (document.documentElement.dataset.feedbackPatched === 'true') return true
    document.documentElement.dataset.feedbackPatched = 'true'

    document.title = 'Y45UK3 - Personal Portfolio'
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = 'Y45UK3 - Personal Portfolio'

    const children = Array.from(header.children)
    const inner = document.createElement('div')
    inner.className = 'header-inner'
    children.forEach(child => inner.appendChild(child))
    header.appendChild(inner)

    const brand = header.querySelector('.brand')
    if (brand) {
      brand.innerHTML = '<span class="brand-signal" aria-hidden="true"></span><span class="brand-wordmark">Y45UK3</span><span class="brand-divider" aria-hidden="true"></span><span class="brand-descriptor">Personal Portfolio</span>'
    }

    const avatarFrame = document.querySelector('.avatar-frame')
    if (avatarFrame) {
      const img = avatarFrame.querySelector('img')
      if (img) img.remove()
      const shield = document.createElement('span')
      shield.className = 'avatar-protection-layer'
      shield.setAttribute('aria-hidden','true')
      avatarFrame.appendChild(shield)
      avatarFrame.setAttribute('role','img')
      avatarFrame.setAttribute('aria-label','Thumula Y45UK3 Kulajitha')
      avatarFrame.addEventListener('contextmenu', e => e.preventDefault())
      avatarFrame.addEventListener('dragstart', e => e.preventDefault())
    }

    document.querySelectorAll('.principles article').forEach((row, index) => {
      row.classList.add('principle-row')
      const icon = document.createElement('span')
      icon.className = 'principle-icon-wrap'
      icon.setAttribute('aria-hidden','true')
      icon.innerHTML = '<img src="' + principleIcons[index] + '" alt="">'
      const number = row.querySelector('span')
      if (number) number.after(icon)
    })

    document.querySelectorAll('.work-card').forEach((card, index) => {
      const code = card.querySelector('.card-code')
      if (!code) return
      const top = document.createElement('div')
      top.className = 'work-card-top'
      card.insertBefore(top, card.firstChild)
      top.appendChild(code)
      const icon = document.createElement('span')
      icon.className = 'work-icon-wrap'
      icon.setAttribute('aria-hidden','true')
      icon.innerHTML = '<img src="' + workIcons[index] + '" alt="">'
      top.appendChild(icon)
    })

    const educationCopy = document.querySelector('#education .section-heading p')
    if (educationCopy) educationCopy.remove()
    const eduTop = document.querySelectorAll('#education .education-topline span')
    if (eduTop[1]) eduTop[1].textContent = 'NIBM, SRI LANKA'
    const eduTitle = document.querySelector('#education .education-main h3')
    if (eduTitle) eduTitle.textContent = eduTitle.textContent.replace(/\s*\(Part Time\)/i,'')
    const mono = document.querySelector('.education-monogram')
    if (mono) {
      mono.className = 'education-logo-wrap'
      mono.removeAttribute('aria-hidden')
      mono.innerHTML = '<img src="https://inquiry.nibm.lk/uploads/company/2e1fefe81bc1c39e652e37ee7d42fb27.png" alt="NIBM - The City University logo">'
    }

    const credentialHeading = document.querySelector('.credentials-heading small')
    if (credentialHeading) credentialHeading.textContent = 'Courses & certifications'
    document.querySelectorAll('.credential-card').forEach(card => {
      const year = card.querySelector(':scope > span')
      const issuer = card.querySelector('p')?.textContent || ''
      const top = document.createElement('div')
      top.className = 'credential-top'
      if (year) {
        year.className = 'credential-year'
        top.appendChild(year)
      }
      const logo = document.createElement('span')
      const isCisco = issuer.includes('Cisco')
      logo.className = 'credential-logo-wrap ' + (isCisco ? 'issuer-cisco' : 'issuer-iesf')
      logo.innerHTML = '<img src="' + (isCisco ? 'https://brand-assets.security.cisco.com/cisco-light.svg' : 'https://www.iesf.org/iesf-logo-light.png') + '" alt="' + (isCisco ? 'Cisco' : 'International Esports Federation') + ' logo">'
      top.appendChild(logo)
      card.insertBefore(top, card.firstChild)
    })

    const expCopy = document.querySelector('#experience .section-heading p')
    if (expCopy) expCopy.textContent = 'Esports operations, events, platforms, and delivery.'
    const projectCopy = document.querySelector('#projects .section-heading p')
    if (projectCopy) projectCopy.textContent = 'Personal builds and operational tools.'
    const stackCopy = document.querySelector('#stack .section-heading p')
    if (stackCopy) stackCopy.textContent = 'Development, automation, networking, and day-to-day technical work.'
    const githubBody = document.querySelector('.github-panel p:not(.eyebrow)')
    if (githubBody) githubBody.textContent = 'My GitHub profile covers current projects, experiments, and development work.'
    const contactTitle = document.querySelector('#contact h2')
    if (contactTitle) contactTitle.textContent = 'Let’s connect.'
    const contactCopy = document.querySelector('#contact .contact-copy')
    if (contactCopy) contactCopy.textContent = 'For esports operations, technical projects, or development work, reach me on GitHub or Discord.'

    document.querySelectorAll('.tool-cell').forEach((cell, index) => {
      const item = tech[index]
      if (!item) return
      const strong = cell.querySelector('strong')
      if (!strong) return
      strong.textContent = item[0]
      const wrap = document.createElement('span')
      wrap.className = 'tool-logo-wrap ' + item[2]
      wrap.innerHTML = '<img src="' + item[1] + '" alt="' + item[0] + ' logo">'
      strong.before(wrap)
    })

    const signal = byText('.signal-label','PERSONAL SYSTEM')
    if (signal) {
      const dot = signal.querySelector('.signal-dot')
      signal.textContent = 'Y45UK3 / ONLINE'
      if (dot) signal.prepend(dot)
    }

    const footerVersion = document.querySelector('footer span:last-child')
    if (footerVersion) footerVersion.textContent = 'v0.4.0'

    return true
  }

  if (applyPatch()) return
  const observer = new MutationObserver(() => {
    if (applyPatch()) observer.disconnect()
  })
  observer.observe(document.documentElement,{childList:true,subtree:true})
  setTimeout(() => observer.disconnect(),10000)
})()
