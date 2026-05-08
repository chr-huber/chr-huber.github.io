(function () {
    'use strict';

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function setAbstractExpanded(item, expanded) {
        var abstractEl = item.querySelector('.pub-abstract');
        if (!abstractEl) return;

        item.classList.toggle('abstract-expanded', expanded);
        item.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        abstractEl.setAttribute('aria-hidden', expanded ? 'false' : 'true');

        if (expanded) {
            abstractEl.style.maxHeight = abstractEl.scrollHeight + 'px';
        } else {
            abstractEl.style.maxHeight = '0px';
        }
    }

    function collapseSiblingAbstracts(item) {
        var siblings = document.querySelectorAll('.publication-item.abstract-expanded');
        Array.prototype.forEach.call(siblings, function (sibling) {
            if (sibling !== item) {
                setAbstractExpanded(sibling, false);
            }
        });
    }

    function bindPublicationInteractions(root) {
        if (!root) return;

        var items = root.querySelectorAll('.publication-item.has-abstract');
        Array.prototype.forEach.call(items, function (item) {
            var abstractEl = item.querySelector('.pub-abstract');
            if (!abstractEl) return;

            setAbstractExpanded(item, item.classList.contains('abstract-expanded'));

            item.addEventListener('click', function (event) {
                if (event.target.closest('a, button')) return;
                var shouldExpand = !item.classList.contains('abstract-expanded');
                if (shouldExpand) {
                    collapseSiblingAbstracts(item);
                }
                setAbstractExpanded(item, shouldExpand);
            });

            item.addEventListener('keydown', function (event) {
                if (event.target !== item) return;
                if (event.key !== 'Enter' && event.key !== ' ') return;
                event.preventDefault();
                var shouldExpand = !item.classList.contains('abstract-expanded');
                if (shouldExpand) {
                    collapseSiblingAbstracts(item);
                }
                setAbstractExpanded(item, shouldExpand);
            });

            abstractEl.addEventListener('transitionend', function (event) {
                if (event.propertyName !== 'max-height') return;
                if (item.classList.contains('abstract-expanded')) {
                    abstractEl.style.maxHeight = abstractEl.scrollHeight + 'px';
                }
            });
        });

        if (items.length > 0 && !root.querySelector('.publication-item.abstract-expanded')) {
            setAbstractExpanded(items[0], true);
        }

        window.addEventListener('resize', function () {
            Array.prototype.forEach.call(items, function (item) {
                if (!item.classList.contains('abstract-expanded')) return;
                var abstractEl = item.querySelector('.pub-abstract');
                if (abstractEl) {
                    abstractEl.style.maxHeight = abstractEl.scrollHeight + 'px';
                }
            });
        });
    }

    function renderPubItem(pub, isInitiallyExpanded) {
        var hasAbstract = pub.abstract && pub.abstract.length > 0;
        var hasMedia = pub.media && pub.media.length > 0;
        var hasLinks = pub.links && pub.links.length > 0;
        var startsExpanded = hasAbstract && !!isInitiallyExpanded;
        var itemClasses = 'row publication-item' + (hasAbstract ? ' has-abstract' : '') + (startsExpanded ? ' abstract-expanded' : '');
        var itemAttrs = hasAbstract
            ? ' tabindex="0" role="button" aria-expanded="' + (startsExpanded ? 'true' : 'false') + '" aria-controls="' + pub.id + '-abstract" aria-label="Show abstract for ' + escapeHtml(pub.title) + '"'
            : '';
        var html = '<div class="' + itemClasses + '"' + itemAttrs + '>';
        html += '<div class="col-xs-12">';
        html += '<div class="publication-main">';
        if (hasAbstract) {
            html += '<span class="publication-indicator" aria-hidden="true"></span>';
        }

        if (pub.titleUrl) {
            html += '<a class="publication-title" href="' + pub.titleUrl + '" target="_blank">' + pub.title + '</a>';
        } else {
            html += '<span class="publication-title">' + pub.title + '</span>';
        }

        if (pub.authors) {
            var yearParen = pub.year ? ' (' + pub.year + ')' : '';
            html += '<div class="authors">' + pub.authors + yearParen + '</div>';
        }

        if (pub.journalInfo) {
            html += '<div class="journalinfo">' + pub.journalInfo + '</div>';
        }

        html += '</div>';

        if (pub.authorNotes && pub.authorNotes.length) {
            html += '<div class="authors" style="margin-top: 4px; margin-bottom: 8px;"><ul>';
            pub.authorNotes.forEach(function (note) {
                html += '<li>' + note + '</li>';
            });
            html += '</ul></div>';
        }

        if (hasAbstract || hasLinks || hasMedia) {
            html += '<div class="material">';
            if (hasLinks) {
                pub.links.forEach(function (link) {
                    html += '<a class="pub-tag" href="' + link.url + '" target="_blank">' + link.label + '</a>';
                });
            }
            if (hasMedia) {
                html += '<a class="btn btn-default" data-toggle="collapse" data-target="#' + pub.id + '-media">media</a>';
            }
            html += '</div>';
        }

        if (hasAbstract) {
            var abstractAttrs = ' class="pub-abstract material" id="' + pub.id + '-abstract" aria-hidden="' + (startsExpanded ? 'false' : 'true') + '"';
            if (startsExpanded) {
                abstractAttrs += ' style="max-height:none; opacity:1; transform:translateY(0);"';
            }
            html += '<div' + abstractAttrs + '>';
            html += '<div class="well abstract"><span class="abstract-label">Abstract:</span> ' + pub.abstract + '</div>';
            html += '</div>';
        }

        if (hasMedia) {
            html += '<div class="collapse material" id="' + pub.id + '-media">';
            html += '<div class="well abstract">';
            pub.media.forEach(function (item, i) {
                html += '<a href="' + item.url + '" target="_blank">' + item.text + '</a>';
                if (i < pub.media.length - 1) { html += '<br>'; }
            });
            html += '</div></div>';
        }

        html += '</div></div>';
        return html;
    }

    function renderSection(title, items, containerId, expandFirstItem) {
        if (!items || !items.length) return;
        var el = document.getElementById(containerId);
        if (!el) return;
        var html = '';
        if (title) {
            html += '<div class="publicationsheader">' + title + '</div>';
        }
        html += '<div class="container" style="width:100%; padding-left:0; padding-right:4;">';
        items.forEach(function (pub, index) {
            html += renderPubItem(pub, !!expandFirstItem && index === 0);
        });
        html += '</div>';
        el.innerHTML = html;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var data = window.PUBLICATIONS_DATA;
        if (!data) return;
        renderSection('Journal Articles', data.journalArticles, 'pub-journal', true);
        renderSection('Book Chapters', data.bookChapters, 'pub-chapters');
        renderSection('Contributions to Crowd-Science Projects', data.crowdScience, 'pub-crowdscience');
        renderSection(null, data.workingPapers, 'pub-working');
        bindPublicationInteractions(document);
    });
}());
