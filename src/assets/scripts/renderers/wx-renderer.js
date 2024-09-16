let WxRenderer = function () {
  let ENV_USE_REFERENCES = true;
  let ENV_STRETCH_IMAGE = true;

  let footnotes = [];
  let footnoteIndex = 0;

  let merge = function (base, extend) {
    return Object.assign({}, base, extend);
  };

  let addFootnote = function (title, link) {
    footnoteIndex += 1;
    footnotes.push([footnoteIndex, title, link]);
    return footnoteIndex;
  };

  this.buildFootnotes = function () {
    let footnoteArray = footnotes.map(function (x) {
      if (x[1] === x[2]) {
        return `<code style="font-size: 90%; opacity: 0.6;">[${x[0]}]</code>: <i>${x[1]}</i><br/>`;
      }
      return `<code style="font-size: 90%; opacity: 0.6;">[${x[0]}]</code> ${x[1]}: <i>${x[2]}</i><br/>`;
    });
    return `<h3>本文内链接</h3><p class="footnotes">${footnoteArray.join(
      "\n"
    )}</p>`;
  };

  this.buildAddition = function () {
    return (
      "<style>.preview-wrapper pre::before{" +
      'font-family:"SourceSansPro","HelveticaNeue",Arial,sans-serif;' +
      "position:absolute;" +
      "top:0;" +
      "right:0;" +
      "color:#ccc;" +
      "text-align:right;" +
      "font-size:0.8em;" +
      "padding:5px10px0;" +
      "line-height:15px;" +
      "height:15px;" +
      "font-weight:600;" +
      "}</style>"
    );
  };

  this.hasFootnotes = function () {
    return footnotes.length !== 0;
  };

  this.getRenderer = function () {
    footnotes = [];
    footnoteIndex = 0;

    let renderer = new marked.Renderer();
    FuriganaMD.register(renderer);

    renderer.heading = function (text, level) {
      switch (level) {
        case 1:
          return `<h1><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h1>`;
        case 2:
          return `<h2><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h2>`;
        case 3:
          return `<h3><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h3>`;
        default:
          return `<h4><span class="prefix"></span><span class="content">${text}</span><span class="suffix"></span></h4>`;
      }
    };
    renderer.paragraph = function (text) {
      if (text.indexOf("<figure>") === 0) {
        return text;
      }
      return `<p>${text}</p>`;
    };
    renderer.blockquote = function (text) {
      return `<blockquote>${text}</blockquote>`;
    };
    renderer.code = function (text, infoString) {
      text = text.replace(/</g, "&lt;");
      text = text.replace(/>/g, "&gt;");

      let lines = text.split("\n");
      let codeLines = [];
      let numbers = [];
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        codeLines.push(
          `<code class="prettyprint"><span class="code-snippet_outer">${
            line || "<br>"
          }</span></code>`
        );
        numbers.push("<li></li>");
      }
      let lang = infoString || "";
      return (
        `<section class="code-snippet__fix code-snippet__js">` +
        `<ul class="code-snippet__line-index code-snippet__js">${numbers.join(
          ""
        )}</ul>` +
        `<pre class="code-snippet__js" data-lang="${lang}">` +
        codeLines.join("") +
        `</pre></section>`
      );
    };
    renderer.codespan = function (text, infoString) {
      return `<code>${text}</code>`;
    };
    renderer.listitem = function (text) {
      return `<span class="listitem"><span style="margin-right: 6px;"><%s/></span>${text}</span>`;
    };
    renderer.list = function (text, ordered, start) {
      text = text.replace(/<\/*p.*?>/g, "");
      let segments = text.split(`<%s/>`);
      if (!ordered) {
        text = segments.join("•");
        return `<p class="ul">${text}</p>`;
      }
      text = segments[0];
      for (let i = 1; i < segments.length; i++) {
        text = text + i + "." + segments[i];
      }
      return `<p class="ol">${text}</p>`;
    };
    renderer.image = function (href, title, text) {
      const subText = `<figcaption>${text}</figcaption>`;

      return `<figure><img class="image" src="${href}" title="${title}" alt="${text}"/>${subText}</figure>`;
    };
    renderer.link = function (href, title, text) {
      if (
        href.indexOf("https://mp.weixin.qq.com") === 0 ||
        href.indexOf("#") === 0
      ) {
        return `<a href="${href}" title="${
          title || text
        }" class="wx_link">${text}</a>`;
      } else if (href === text) {
        return text;
      } else {
        if (ENV_USE_REFERENCES) {
          let ref = addFootnote(title || text, href);
          return `<span class="link">${text}<sup>[${ref}]</sup></span>`;
        } else {
          return `<a href="${href}" title="${
            title || text
          }" class="link">${text}</a>`;
        }
      }
    };
    renderer.strong = function (text) {
      return `<strong>${text}</strong>`;
    };
    renderer.em = function (text) {
      return `<span style="font-style: italic;")}>${text}</span>`;
    };
    renderer.table = function (header, body) {
      return `<table><thead>${header}</thead><tbody>${body}</tbody></table>`;
    };
    renderer.tablecell = function (text, flags) {
      return `<td>${text}</td>`;
    };
    renderer.hr = function () {
      return `<hr />`;
    };
    return renderer;
  };
};
