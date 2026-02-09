function getKeyword() {
  return document.getElementById("keyword").value;
}

function generateTitle() {
  let k = getKeyword();
  let titles = [
    `How to ${k} (Step by Step)`,
    `${k} Tutorial for Beginners`,
    `${k} Tips That ACTUALLY Work`,
    `I Tried ${k} – Here’s What Happened`
  ];
  document.getElementById("output").value =
    titles[Math.floor(Math.random() * titles.length)];
}

function generateTags() {
  let k = getKeyword();
  let tags = [
    k,
    k + " tutorial",
    "how to " + k,
    k + " youtube",
    k + " 2026"
  ];
  document.getElementById("output").value = tags.join(", ");
}

function generateDescription() {
  let k = getKeyword();
  document.getElementById("output").value =
`In this video, we explain ${k} step by step.
This tutorial is perfect for beginners.

LIKE 👍 COMMENT 💬 SUBSCRIBE 🔔
#${k.replace(/\s+/g,"")} #YouTubeSEO`;
}
