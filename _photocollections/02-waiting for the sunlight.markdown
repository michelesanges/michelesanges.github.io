---
layout: page
title:  "WAITING FOR THE SUNLIGHT"
<!-- Visioni al calar della sera -->
subtitle: Fotografia - Collezioni
thumbnail-path: https://goo.gl/34YcH2
short-description: this is the short description
images:
  - image_path: https://goo.gl/34YcH2
  - image_path: https://goo.gl/mFN3wH
  - image_path: https://goo.gl/nsPNG4
  - image_path: https://goo.gl/93sUhJ
  - image_path: https://goo.gl/hmjT2p
  - image_path: https://goo.gl/cVeBUK
  - image_path: https://goo.gl/ES4VKC
  - image_path: https://goo.gl/RBMoqY
  - image_path: https://goo.gl/koBKp6
  - image_path: https://goo.gl/Yj1Jxp
  - image_path: https://goo.gl/HWz57q
  - image_path: https://goo.gl/MYCpcr
  - image_path: https://goo.gl/AqHntJ
  - image_path: https://goo.gl/cCDVpn
  - image_path: https://goo.gl/rgKMwZ
  - image_path: https://goo.gl/DCpDsB
  - image_path: https://goo.gl/bVTqRE
  - image_path: https://goo.gl/kJCb7x
  - image_path: https://goo.gl/gXm5j5
  - image_path: https://goo.gl/9LPQ1u
  - image_path: https://goo.gl/euwTTo
  - image_path: https://goo.gl/8BNCdm
---
<center>
{% for image in page.images %}
  <div class="collection">
	<img src="{{ image.image_path }}" alt="{{ image.title}}"/>
	<p></p>
  </div>
{% endfor %}
</center>
