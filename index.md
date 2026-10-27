---
layout: generic-page
title: Home
description: "17th International Conference on Software Business — Gothenburg, Sweden, October 2026. Join researchers and practitioners exploring AI-native dominance, digital sovereignty, and the future of software business."
links:
  - name: Program
    relative_url: /program/
  - name: How to get there
    relative_url: /location/
  - name: Tickets
    disabled: true
    absolute_url: ""
---
<style>
    .figure {
      display: inline-block;
      margin: 10px;
      cursor: pointer;
    }
</style>

<div class="col-md-10 mx-auto">
    <h1 id="Welcome" class="mb-4 text-center">Welcome to ICSOB 2026!</h1>

    <p>We are pleased to invite submissions to the 17th International Conference on Software Business (ICSOB 2026), taking place in Gothenburg, Sweden, on October 26–28, 2026.</p>

    <p>ICSOB 2026 is a multidisciplinary conference that brings together an international community of researchers, practitioners, and policymakers to exchange ideas and advance understanding of the rapidly evolving world of software-intensive business.
    </p>

    <h3 class="text-center mb-3"><i>"Software Business in the Age of AI-Native Dominance and Digital Sovereignty"</i></h3>

    <p>Under this theme, the conference will explore how software-intensive products, services, platforms, and processes are being reshaped by AI, cloud infrastructures, automation, geopolitical shifts, and the growing importance of strategic autonomy. At the same time, ICSOB remains a broad multidisciplinary forum that welcomes contributions from Information Systems, Software Engineering, Business and Management, Economics, and related disciplines.</p>

    <p>The conference invites studies on software product management and innovation, cloud computing and next-generation infrastructures, automation and business process modeling, software ecosystems and digital platforms, entrepreneurship and software business development, digital transformation, sustainability, ethics, inclusion, governance, and public value. ICSOB 2026 welcomes diverse research approaches, including qualitative and quantitative studies, literature reviews, empirical analyses, modeling and simulation, design science, and practice-based contributions.</p>

    <p>Please see the dedicated pages for <a href="/ResearchPapers">Research Papers</a>, <a href="/Posters">Posters and Demos</a>, <a href="/PhDRetreatSubmissions">the PhD Retreat</a>, and <a href="/importantdates">Important Dates</a> for full submission details and deadlines.</p>

    <p>ICSOB 2026 will be organized as an in-person conference in <a href="/location">Gothenburg, Sweden</a>.</p>

    <hr class="my-4">

    <h3 class="text-center mb-3">Conference Snapshots</h3>

    <style>
        .snapshots-viewport {
            overflow: hidden;
        }

        .snapshots-track {
            display: flex;
            width: 200%;
            transition: transform 0.8s ease;
        }

        .snapshots-page {
            flex: 0 0 50%;
            display: flex;
            gap: 1rem;
        }

        .snapshots-page > div {
            flex: 1 1 0;
        }

        .snapshots-page img {
            width: 100%;
            aspect-ratio: 4 / 3;
            object-fit: cover;
        }
    </style>

    <div class="snapshots-viewport mb-2">
        <div class="snapshots-track" id="snapshotsTrack">
            <div class="snapshots-page">
                <div><img src="/assets/images/gallery_placeholder_1.jpg" alt="Conference snapshot placeholder 1" class="rounded"></div>
                <div><img src="/assets/images/gallery_placeholder_2.jpg" alt="Conference snapshot placeholder 2" class="rounded"></div>
                <div><img src="/assets/images/gallery_placeholder_3.jpg" alt="Conference snapshot placeholder 3" class="rounded"></div>
            </div>
            <div class="snapshots-page">
                <div><img src="/assets/images/gallery_placeholder_4.jpg" alt="Conference snapshot placeholder 4" class="rounded"></div>
                <div><img src="/assets/images/gallery_placeholder_5.jpg" alt="Conference snapshot placeholder 5" class="rounded"></div>
                <div><img src="/assets/images/gallery_placeholder_6.jpg" alt="Conference snapshot placeholder 6" class="rounded"></div>
            </div>
        </div>
    </div>

    <script>
        (function () {
            var track = document.getElementById('snapshotsTrack');
            var imgs = Array.prototype.slice.call(track.querySelectorAll('img'));

            // Fisher-Yates shuffle, then reassign shuffled src/alt across the slots
            var sources = imgs.map(function (img) { return { src: img.src, alt: img.alt }; });
            for (var i = sources.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = sources[i];
                sources[i] = sources[j];
                sources[j] = tmp;
            }
            imgs.forEach(function (img, i) {
                img.src = sources[i].src;
                img.alt = sources[i].alt;
            });

            var shifted = false;
            setInterval(function () {
                shifted = !shifted;
                track.style.transform = shifted ? 'translateX(-50%)' : 'translateX(0)';
            }, 3000);
        })();
    </script>

    <hr class="my-4">

    <h3 class="mb-3">Important Dates</h3>

    {% include important-dates/_all.html %}

    <hr class="my-4">

    <h3 class="text-center mb-3">Proceedings</h3>
    <p>Accepted papers will be published in <strong>Springer's Lecture Notes in Business Information Processing (LNBIP)</strong> series and indexed in Scopus, DBLP, and other major scientific databases. Previous ICSOB proceedings are available at <a href="https://link.springer.com/conference/icsob" target="_blank">link.springer.com/conference/icsob</a>.</p>

    <div class="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-3 mb-2">
        <a href="https://www.springer.com/series/7911" target="_blank">
            <img src="/assets/images/lnbip-logo.png" alt="Lecture Notes in Business Information Processing (LNBIP)" style="height: 70px; object-fit: contain;">
        </a>
        <a href="https://www.springer.com/" target="_blank">
            <img src="/assets/images/springer-logo.png" alt="Springer" style="height: 70px; object-fit: contain;">
        </a>
        <a href="https://www.scopus.com/" target="_blank">
            <img src="/assets/images/scopus-logo.svg" alt="Scopus" style="height: 50px; object-fit: contain;">
        </a>
    </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "ICSOB 2026 — 17th International Conference on Software Business",
  "startDate": "2026-10-26",
  "endDate": "2026-10-28",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Gothenburg, Sweden",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gothenburg",
      "addressCountry": "SE"
    }
  },
  "url": "https://icsob2026.github.io",
  "description": "17th International Conference on Software Business — exploring AI-native software business, digital sovereignty, software ecosystems, cloud platforms, sustainability, and entrepreneurship.",
  "organizer": {
    "@type": "Organization",
    "name": "ICSOB",
    "url": "https://icsob2026.github.io"
  }
}
</script>