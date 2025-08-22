const resourceMap = [
    {
        "type": "mainlist",
        "display": "",
        "content": [
            {
                "type": "maintitle",
                "display": "PROGRAM",
            },
            {
                "type": "list",
                "display": "",
                "content": [
                    {
                        "type": "title",
                        "display": "Java",
                    },
                    {
                        "type": "a",
                        "display": "Temurin openjdk",
                        "content": "https://adoptium.net/zh-CN/temurin/releases/",
                    },
                    {
                        "type": "a",
                        "display": "Microsoft openjdk",
                        "content": "https://learn.microsoft.com/zh-cn/java/openjdk/download",
                    },
                    {
                        "type": "a",
                        "display": "zulu openjdk",
                        "content": "https://www.azul.com/downloads/?package=jdk#zulu",
                    },
                    {
                        "type": "a",
                        "display": "graalvm",
                        "content": "https://www.graalvm.org/downloads/",
                    },
                    {
                        "type": "a",
                        "display": "Oracle java",
                        "content": "https://www.oracle.com/java/technologies/downloads/",
                    },
                ],
            },
            {
                "type": "list",
                "display": "",
                "content": [
                    {
                        "type": "title",
                        "display": "Tools",
                    },
                    {
                        "type": "a",
                        "display": "You might not need jQuery",
                        "content": "https://youmightnotneedjquery.com/",
                    },
                    {
                        "type": "a",
                        "display": "iHateRegex",
                        "content": "https://ihateregex.io/",
                    },
                    {
                        "type": "a",
                        "display": "flv.js",
                        "content": "https://bilibili.github.io/flv.js",
                    },
                ],
            },
        ],
    },
    {
        "type": "other",
        "content": "<hr>",
    },
    {
        "type": "mainlist",
        "display": "",
        "content": [
            {
                "type": "maintitle",
                "display": "GAME",
            },
            {
                "type": "list",
                "display": "",
                "content": [
                    {
                        "type": "title",
                        "display": '<span style="font-family: Minecraft;">Minecraft</span>',
                        "content": "",
                    },
                    {
                        "type": "a",
                        "display": '<span style="font-family: Minecraft;">HMCL启动器官网</span>',
                        "content": "https://hmcl.huangyuhui.net/",
                    },
                    {
                        "type": "a",
                        "display": '<span style="font-family: Minecraft;">minecraft_forge_腐肉mod_1.12.2_v0.5</span>',
                        "content": "https://pan.baidu.com/s/1qZuEXw4",
                    },
                    {
                        "type": "a",
                        "display": '<span style="font-family: Minecraft;">minecraft_TotemCooldownPlugin_spigot</span>',
                        "content": "https://github.com/wtnpmt/TotemCooldownPlugin/releases",
                    },
                ],
            },
            {
                "type": "list",
                "display": "",
                "content": [
                    {
                        "type": "title",
                        "display": "FFXIV",
                        "content": "",
                    },
                    {
                        "type": "a",
                        "display": "ff14 灰机wiki",
                        "content": "https://ff14.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5",
                    },
                    {
                        "type": "a",
                        "display": "素素辣鸡排",
                        "content": "https://tools.ffsusu.com/lajipai/",
                    },
                    {
                        "type": "a",
                        "display": "配装模拟器",
                        "content": "https://asvel.github.io/ffxiv-gearing/",
                    },
                    {
                        "type": "a",
                        "display": "生产模拟器",
                        "content": "https://tnze.yyyy.games/#/welcome",
                    },
                    {
                        "type": "a",
                        "display": "wiki潜水艇工具",
                        "content": "https://ff14.huijiwiki.com/wiki/%E9%83%A8%E9%98%9F%E6%BD%9C%E6%B0%B4%E8%89%87%E5%B0%8F%E5%B7%A5%E5%85%B7",
                    },
                    {
                        "type": "a",
                        "display": "潜水艇模拟器",
                        "content": "https://helfard.github.io/ffxiv/stkool/",
                    },
                ],
            },
        ],
    },
    {
        "type": "other",
        "content": "<hr>",
    },
    {
        "type": "mainlist",
        "display": "",
        "content": [
            {
                "type": "maintitle",
                "display": "EXTRA",
                "content": "",
            },
            {
                "type": "a",
                "display": '<img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu" />',
                "content": "https://996.icu",
            },
            {
                "type": "a",
                "display": "玩个鸟",
                "content": "https://nebez.github.io/floppybird/",
            },
            {
                "type": "a",
                "display": "看个球",
                "content": "./ball.html",
            },
            {
                "type": "a",
                "display": "keybr",
                "content": "https://www.keybr.com/zh-hans",
            },
            {
                "type": "a",
                "display": "看点文字",
                "content": "./text_zh-cn.html",
            },
            {
                "type": "a",
                "display": "KanDianWenZi",
                "content": "./text.html",
            },
            {
                "type": "other",
                "content": `<button type="button" class="list-group-item list-group-item-action" data-bs-toggle="modal"
                    data-bs-target="#payment">
                    赞助我
                </button>
                <!-- Modal -->
            <div class="modal fade" id="payment" tabindex="-1" aria-labelledby="paymentLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="paymentLabel">赞助</h1>
                        </div>
                        <div class="modal-body">
                            <img src="./img/100.jpg" class="img-fluid">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>`,
            },
        ],
    },
]