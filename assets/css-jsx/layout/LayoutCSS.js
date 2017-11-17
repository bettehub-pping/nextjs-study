const LayoutCSS = () => (
  <style jsx>{`
    body {
        color: #333;
    }

    ul, ol {
      list-style: none;
    }

    .pure-img-responsive {
        max-width: 100%;
        height: auto;
    }

    #layout,
    #menu,
    .menu-link {
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        -ms-transition: all 0.2s ease-out;
        -o-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }

    #layout {
        position: relative;
        left: 0;
        padding-left: 0;
    }
        #layout.active #menu {
            left: 150px;
            width: 150px;
        }

        #layout.active .menu-link {
            left: 150px;
        }
    .content {
        margin: 0 auto;
        padding: 0 2em;
        max-width: 800px;
        margin-bottom: 50px;
        line-height: 1.6em;
    }

    .header {
         margin: 0;
         color: #333;
         text-align: center;
         padding: 2em;
         border-bottom: 1px solid #eee;
     }
        .header h1 {
            margin: 0.2em 0;
            font-size: 3em;
            font-weight: 500;
        }

    .content-subhead {
        margin: 50px 0 20px 0;
        font-weight: 400;
        color: #666;
    }
      p strong {
          color: #1f8dd6;
      }

    #menu {
        margin-left: -150px; /* "#menu" width */
        width: 150px;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 1000; /* so the menu or its navicon stays above all content */
        background: #191818;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
        #menu a {
            color: #999;
            border: none;
            padding: 0.6em 0 0.6em 0.6em;
        }

         #menu .pure-menu,
         #menu .pure-menu ul {
            border: none;
            background: transparent;
        }

        #menu .pure-menu ul,
        #menu .pure-menu .menu-item-divided {
            border-top: 1px solid #333;
        }
            #menu .pure-menu li a:hover,
            #menu .pure-menu li a:focus {
                background: #333;
            }

        #menu .pure-menu-selected,
        #menu .pure-menu-heading {
            background: #1f8dd6;
        }
            #menu .pure-menu-selected a {
                color: #fff;
            }

        #menu .pure-menu-heading {
            font-size: 110%;
            color: #fff;
            margin: 0;
        }
    .menu-link {
        position: fixed;
        display: block; /* show this only on small screens */
        top: 0;
        left: 0; /* "#menu width" */
        background: #000;
        background: rgba(0,0,0,0.7);
        font-size: 10px; /* change this value to increase/decrease button size */
        z-index: 10;
        width: 2em;
        height: auto;
        padding: 2.1em 1.6em;
    }

        .menu-link:hover,
        .menu-link:focus {
            background: #000;
        }

        .menu-link span {
            position: relative;
            display: block;
        }

        .menu-link span,
        .menu-link span:before,
        .menu-link span:after {
            background-color: #fff;
            width: 100%;
            height: 0.2em;
        }

            .menu-link span:before,
            .menu-link span:after {
                position: absolute;
                margin-top: -0.6em;
            }

            .menu-link span:after {
                margin-top: 0.6em;
            }

        .header,
        .content {
            padding-left: 2em;
            padding-right: 2em;
        }

        #layout {
            padding-left: 150px; /* left col width "#menu" */
            left: 0;
        }
        #menu {
            left: 150px;
        }

        .menu-link {
            position: fixed;
            left: 150px;
            display: none;
        }

        #layout.active .menu-link {
            left: 150px;
        }
        #layout.active {
            position: relative;
            left: 150px;
        }

  `}</style>
);
export default LayoutCSS;
