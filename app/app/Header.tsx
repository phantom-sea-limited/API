"use client"
import Link from 'next/link'
import Script from 'next/script'

export function Header() {
    return <>
        <meta charSet="utf-8" />
        <link
            rel="icon"
            type="image/ico"
            href="./tmp_crop_decode.jpg"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="renderer" content="webkit" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0,maximum-scale=5.0"
        />
        <meta httpEquiv="Cache-Control" content="no-siteapp" />
        <meta name="description" content="currentItem.description" />
        <link
            rel="stylesheet"
            href="./index.css"
        />
        <Script src='./mdui.min.js'/>
    </>
}

export function Drawer() {
    const li = [
        {
            "icon": "near_me",
            "title": "开始使用",
            "color": "blue",
            "items": [
                {
                    "label": "简介",
                    "href": "/release/API/",
                },
                {
                    "label": "下载",
                    "href": "/release/API/download",
                }
            ]
        },
        {
            "icon": "layers",
            "title": "API请求",
            "color": "deep-orange",
            "items": [
                {
                    "label": "颜色与主题",
                    "href": "/release/API/",
                },
                {
                    "label": "字体",
                    "href": "/release/API/",
                }
            ]
        },
        {
            "icon": "widgets",
            "title": "可视化请求",
            "color": "green",
            "items": [
                {
                    "label": "搜索",
                    "href": "/release/API/search",
                }
            ]
        },
        {
            "icon": "view_carousel",
            "title": "其他",
            "color": "brown",
            "items": []
        },
        {
            "icon": "settings",
            "title": "设置",
            "color": "grey",
            "items": [
                {
                    "label": "Token",
                    "href": "/release/API/token",
                },
                {
                    "label": "预览设置",
                    "href": "/release/API/preview",
                },
                {
                    "label": "用户中心",
                    "href": "/release/user/login",
                }
            ]
        }
    ]

    return <>
        <header className="appbar mdui-appbar mdui-appbar-fixed">
            <div className="mdui-toolbar mdui-color-theme">
                <span
                    className="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
                    mdui-drawer="{target: '#main-drawer', swipe: true}"
                >
                    <i className="mdui-icon material-icons">menu</i>
                </span>
                <a href="/" className="mdui-typo-headline mdui-hidden-xs">
                    放映厅
                </a>
                <a data-page="API/" className="mdui-typo-title ajax">
                    API
                </a>
                <div className="mdui-toolbar-spacer" />
                <span
                    className="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white"
                    mdui-dialog="{target: '#dialog-docs-theme'}"
                    mdui-tooltip="{content: '设置主题'}"
                >
                    <i className="mdui-icon material-icons">color_lens</i>
                </span>
            </div>
        </header>
        <div className="mdui-drawer" id="main-drawer">
            <div
                className="mdui-list"
                mdui-collapse="{accordion: true}"
                style={{ marginBottom: 76 }}
            >
                {li.map((l) => <div className="mdui-collapse-item" key={l.title}>
                    <div className="mdui-collapse-item-header mdui-list-item mdui-ripple">
                        <i className={`mdui-list-item-icon mdui-icon material-icons mdui-text-color-${l.color}`}>
                            {l.icon}
                        </i>
                        <div className="mdui-list-item-content">{l.title}</div>
                        <i className="mdui-collapse-item-arrow mdui-icon material-icons">
                            keyboard_arrow_down
                        </i>
                    </div>
                    <div className="mdui-collapse-item-body mdui-list">
                        {l.items.map((i) => <Link className="mdui-list-item mdui-ripple" href={i.href} key={i.label}>
                            {i.label}
                        </Link>)}
                    </div>
                </div>)}
            </div>
        </div>
    </>

}


export function Footer() {
    return <div className="footer-nav mdui-color-theme" style={{ zIndex: 0 }}>
        <div className="mdui-container">
            <div className="mdui-row">
                <div className="mdui-col-xs-2 mdui-col-sm-6 footer-nav-left" />
                <a
                    href="//app.phantom-sea-limited.ltd"
                    className="mdui-ripple mdui-color-theme mdui-col-xs-10 mdui-col-sm-6 footer-nav-right"
                >
                    <div className="footer-nav-text">
                        <i className="mdui-icon material-icons">arrow_forward</i>
                        <span className="footer-nav-direction">© 2019-2023</span>
                        <div className="footer-nav-chapter">幻海实验室</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
}