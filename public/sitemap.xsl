<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sitemap xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat" />

  <!-- One stylesheet handles both <urlset> and <sitemapindex>. -->
  <xsl:variable name="entries"
    select="sitemap:urlset/sitemap:url | sitemap:sitemapindex/sitemap:sitemap" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XML Sitemap</title>
        <style>
          :root { color-scheme: light dark; }
          * { box-sizing: border-box; }
          body {
            margin: 0 auto;
            padding: 2.5rem 1.25rem 4rem;
            max-width: 72rem;
            font: 14px/1.5 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
            color: #1a1a1a;
            background: #fff;
          }
          h1 { font-size: 1.5rem; margin: 0 0 .25rem; letter-spacing: -.01em; }
          p.meta { margin: 0 0 1.75rem; color: #666; }
          table { width: 100%; border-collapse: collapse; }
          th, td {
            text-align: left;
            padding: .6rem .75rem;
            border-bottom: 1px solid #e5e5e5;
            vertical-align: top;
          }
          th {
            font-size: .72rem;
            letter-spacing: .06em;
            text-transform: uppercase;
            color: #666;
            border-bottom: 1px solid #ccc;
          }
          tbody tr:hover { background: #f7f7f5; }
          a { color: #1d4ed8; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .loc { word-break: break-all; }
          .lastmod { white-space: nowrap; }
          .alts { white-space: nowrap; }
          .alt {
            display: inline-block;
            margin: 0 .3rem .3rem 0;
            padding: .1rem .45rem;
            border: 1px solid #ddd;
            border-radius: 999px;
            font-size: .75rem;
            color: #444;
          }
          .alt:hover { border-color: #1d4ed8; color: #1d4ed8; text-decoration: none; }
          .alt .hreflang { font-weight: 600; }
          .empty { color: #666; }
          @media (prefers-color-scheme: dark) {
            body { color: #e8e8e8; background: #121212; }
            p.meta, th, .empty { color: #9a9a9a; }
            th, td { border-bottom-color: #2c2c2c; }
            th { border-bottom-color: #3a3a3a; }
            tbody tr:hover { background: #1c1c1c; }
            a { color: #7aa2f7; }
            .alt { border-color: #3a3a3a; color: #c4c4c4; }
            .alt:hover { border-color: #7aa2f7; color: #7aa2f7; }
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p class="meta">
          <xsl:value-of select="count($entries)" />
          <xsl:text> </xsl:text>
          <xsl:choose>
            <xsl:when test="sitemap:sitemapindex">sitemap(s)</xsl:when>
            <xsl:otherwise>URL(s)</xsl:otherwise>
          </xsl:choose>
        </p>

        <xsl:choose>
          <xsl:when test="sitemap:sitemapindex">
            <table>
              <thead>
                <tr><th scope="col">Sitemap</th></tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td class="loc">
                      <a>
                        <xsl:attribute name="href"><xsl:value-of select="sitemap:loc" /></xsl:attribute>
                        <xsl:value-of select="sitemap:loc" />
                      </a>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>

          <xsl:when test="sitemap:urlset">
            <table>
              <thead>
                <tr>
                  <th scope="col">URL</th>
                  <th scope="col">Last modified</th>
                  <th scope="col">Alternates</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td class="loc">
                      <a>
                        <xsl:attribute name="href"><xsl:value-of select="sitemap:loc" /></xsl:attribute>
                        <xsl:value-of select="sitemap:loc" />
                      </a>
                    </td>
                    <td class="lastmod">
                      <xsl:choose>
                        <xsl:when test="sitemap:lastmod">
                          <xsl:value-of select="sitemap:lastmod" />
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="empty">—</span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="alts">
                      <xsl:for-each select="xhtml:link">
                        <a class="alt">
                          <xsl:attribute name="href"><xsl:value-of select="@href" /></xsl:attribute>
                          <span class="hreflang"><xsl:value-of select="@hreflang" /></span>
                        </a>
                      </xsl:for-each>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>

          <xsl:otherwise>
            <p class="empty">This document does not contain a sitemap.</p>
          </xsl:otherwise>
        </xsl:choose>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
