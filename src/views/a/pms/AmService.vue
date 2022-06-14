<template>
  <a-card size="small">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="欢迎">
        <div class="flex flex-wrap justify-center items-center">
          <img class="max-w-80 rounded-lg" src="https://article.biliimg.com/bfs/article/6c17e2780a8fdedb51e52518385e499abed3539b.jpg" />
        </div>
        <a-typography-paragraph>
          <blockquote>
            <div>旨在解答客户下单疑惑（简短明了为宜）如：</div>
            <div>1、这是什么？我可以拍吗？</div>
            <div>2、苹果音乐学生验证怎么操作？</div>
            <div>3、不是学生也可以验证吗？需要我提供什么吗？</div>
            <div>4、我的苹果音乐提醒我验证了，可以拍这个吗？</div>
          </blockquote>
        </a-typography-paragraph>
        <a-typography-paragraph copyable>
          <div> 亲，直接下单【月租5元自付】 </div>
          <div>1、给您激活链+教程 </div>
          2、自助激活或续期自己的lD
        </a-typography-paragraph>
        <a-typography-paragraph copyable>
          <div> 亲，直接拍，放心下单 </div>
          <div>1、给您激活链+教程 </div>
          <div>2、自助激活或续期自己的lD</div>
          3、成功后【月租5元自付】
        </a-typography-paragraph>
        <a-typography-paragraph copyable>
          <div> 购买须知：</div>
          <div> 1、下单后，给您激活链，点开操作，即可享受或续期学生优惠！ </div>
          <div>2、月租5元自付</div>
          3、安卓勿拍，仅iphone、ipad可验证
        </a-typography-paragraph>
        <a-divider>配置方法</a-divider>
        <div>
          <img class="max-h-100 rounded-lg" src="https://article.biliimg.com/bfs/article/bdeecd46eec80459462ba0afe9558a8dbbf63591.jpg" />
          <img class="max-h-100 rounded-lg" src="https://article.biliimg.com/bfs/article/e926a12c196e559c83f037dcac2cf276ff374581.jpg" />
        </div>
      </a-tab-pane>

      <a-tab-pane key="2" tab="问答">
        <a-collapse v-model:activeKey="collapseActiveKey" accordion>
          <a-collapse-panel key="1" header="进店催拍！">
            <a-typography-paragraph>
              <blockquote> 客户进店后，犹豫不决、迟迟不下单 </blockquote>
            </a-typography-paragraph>
            <a-typography-paragraph copyable> 亲，下单后发您激活链，点开操作，即可享受或续期学生半价！ </a-typography-paragraph>
            <a-typography-paragraph copyable> 亲，验证或续验证，下单即可，可提前续！1年有效，人工，升级链均需成本 </a-typography-paragraph>
          </a-collapse-panel>
          <a-collapse-panel key="2" header="怎么操作？">
            <a-typography-paragraph>
              <blockquote> 下单后的验证流程 </blockquote>
            </a-typography-paragraph>
            <a-typography-paragraph copyable>
              <div>粘贴到刘览器（推荐第三方），并顺着点，直到成功！</div>
              <br />
              满意，还给小店好的评哦😘
            </a-typography-paragraph>
            <a-typography-paragraph copyable>
              <div>粘贴到刘览器（推荐第三方），并顺着点，直到成功！</div>
              <br />
              提示：无论指纹或人脸多少次，苹果不会二次扣费，请放心人脸或指纹！
            </a-typography-paragraph>
          </a-collapse-panel>
          <a-collapse-panel key="3" header="慢打不开！">
            <a-typography-paragraph> <blockquote>验证过程中，出现无法连接、页面空白、加载不出来等情况 </blockquote></a-typography-paragraph>
            <a-typography-paragraph copyable>
              <div>这3个方法都试试： </div>
              <div>换个刘览器</div>
              <div>重启手机重来</div>
              <div>网太差换网重试</div>
              或换其他苹果设备试试
            </a-typography-paragraph>
          </a-collapse-panel>
          <a-collapse-panel key="4" header="无法验证？">
            <a-typography-paragraph>
              <blockquote>我们无法验证您的学生身份。 </blockquote>
              <a-typography-paragraph copyable> 亲，换谷歌、夸克等第三方刘览器重来</a-typography-paragraph>
              <img class="max-h-100 rounded-lg" src="https://article.biliimg.com/bfs/article/d2c9d8f23b64bd4b57a8ea144361af959eb19788.jpg" />
            </a-typography-paragraph>
          </a-collapse-panel>
          <a-collapse-panel key="5" header="是否成功？">
            <a-typography-paragraph>
              <blockquote> 如何判断是否成功续期或升级？ </blockquote>
              <a-typography-paragraph copyable>
                <div>嗯嗯，是否成功？</div>
                <div>点开【设置头像订阅Apple Music】，学生5元/月勾上，</div>
                且【验证资格】提醒消失，即成功
              </a-typography-paragraph>
            </a-typography-paragraph>
            <div class="flex flex-wrap justify-center items-center">
              <img class="max-h-90 rounded-lg" src="https://article.biliimg.com/bfs/article/7b874bde1ce69b4096656e2668f6d348fd06f3aa.png" />
            </div>
          </a-collapse-panel>
          <a-collapse-panel key="5" header="学生优惠？">
            <a-typography-paragraph>
              <blockquote> 本次验证学生优惠能持续多久 </blockquote>
              <a-typography-paragraph copyable>12个月。每12个月来小店下单验证一次即可</a-typography-paragraph>
              <a-typography-paragraph copyable>验证一次管12个月，每12个月来下单续即可</a-typography-paragraph>
              <a-typography-paragraph copyable>
                <div>苹果1-4年会抽查资格</div>
                <div> 如果抽到：音乐界面会提前一个月弹窗提醒验证</div>
                则需要来这边下单续！
              </a-typography-paragraph>
            </a-typography-paragraph>
          </a-collapse-panel>
          <a-collapse-panel key="6" header="成功催评！">
            <a-typography-paragraph>
              <blockquote> 买家主动好评增加5信誉分，过期自动评增加1信誉分，提高信誉分可提高搜索权重。但是不能直接出现“好评”等字眼，以下方法可避免 </blockquote>
              <a-typography-paragraph copyable> 亲，满意的话，还给小店好的评哦😘 </a-typography-paragraph>
              <a-typography-paragraph copyable> 亲，如果满意，还给小店满意的评哦😘 </a-typography-paragraph>
            </a-typography-paragraph>
          </a-collapse-panel>

          <!--          <a-collapse-panel key="6" header="账户已使用">-->
          <!--            <a-typography-paragraph copyable> 亲是过期用户，按教程步骤1，先花10元开个人方案，再升级，第二月起5元 </a-typography-paragraph>-->
          <!--          </a-collapse-panel>-->
        </a-collapse>
      </a-tab-pane>

      <a-tab-pane key="3" tab="服务">
        <a-divider><a-typography-title :level="2">关于退款</a-typography-title></a-divider>
        <a-typography-paragraph>
          <blockquote>
            凡是申请退款，<a-typography-text mark>一律无理由同意退款</a-typography-text>，无需与买家理论，有些买家就是想白嫖，不给退，就千方百计给差评。
            <div> 1、一个差评可能会导致后面下单顾客的犹豫，还会使店铺评分从4.9高，降低到4.9低。</div>
            <div> 2、淘宝不去评判买家对错，差评多了，会导致店铺被淘宝风控，好不容易起来的商品，可能被淘宝无情下架。</div>
            <div> 3、收到差评，还要花0.5-1小时到电脑端写解释（并且解释只能文字不能带图），极其影响情绪，得不偿失。蝇头小利，斤斤计较将难以做大做强。心态放宽，格局拉满，用更多的精力服务优质顾客。</div>
            <div> 从长远来看，1单差评带来的损失，远大于这一单的价格。消费者走了，差评永远留在了店里，多一事不如少一事，能退都退。以下是负面例子</div>
          </blockquote></a-typography-paragraph
        >
        <a-typography-paragraph mark>
          如果有想给差评的买家，就跟买家道歉，尽可能引导买家退款：
          <div>
            <a-typography-text copyable>十分抱歉，没有给亲带来良好的体验，作为补偿，亲申请退款这边给亲退了，亲看可以吗？希望亲不要因此影响一天美丽的心情呢</a-typography-text>
          </div>
        </a-typography-paragraph>
        <img class="max-h-180 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/678b7d961532ca7c22fe11f68cf99af22d3c8748.jpg" />
        <a-typography-paragraph mark> 商家拒绝退款，消费者千方百计给差评 </a-typography-paragraph>
        <img class="max-h-180 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/f5fad2a20599d475b8801a9a37c2c5e7d8ebcc25.jpg" />
        <a-typography-paragraph mark> 消费者感觉商家说话态度冷漠（可能有时候会感觉身心俱疲，但能赚到钱再辛苦也是值得的，所以尽可能做好服务） </a-typography-paragraph>
        <img class="max-h-180 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/5189f45062cd777c517d7244b37f24f7f5542300.jpg" />
        <a-divider><a-typography-title :level="5" mark>以下是正面例子</a-typography-title></a-divider>
        <a-typography-paragraph mark> 即使价格高，但更能赢得消费者信赖，因为消费者更希望得到尊重 </a-typography-paragraph>
        <img class="max-h-180 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/f5458c3e1f1b44e4a67a4cd843fc0da5601d18ca.jpg" />
        <a-typography-paragraph mark> 有时候不知道回什么，可以发一些表情包 </a-typography-paragraph>
        <img class="max-h-180 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/f5458c3e1f1b44e4a67a4cd843fc0da5601d18ca.jpg" />
      </a-tab-pane>

      <a-tab-pane key="4" tab="流程">
        <a-divider><a-typography-title :level="2">下单前</a-typography-title></a-divider>
        <img class="max-h-150 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/162aa5cc81ab4199711aa4cbd23ab8f15305c62f.jpg" />
        <img class="max-h-150 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/bb6e96e8f40da692213cb845d0ebe689075e8ebc.jpg" />
        <a-divider><a-typography-title :level="2">下单后</a-typography-title></a-divider>
        <a-divider><a-typography-title :level="5" mark>买家点开链接，步骤一、情况1</a-typography-title></a-divider>
        <img class="max-h-150 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/e9eefd7f578b1036cd77c9197a13fa26bcdced30.png" />
        <a-divider><a-typography-title :level="5" mark>步骤一、情况2</a-typography-title></a-divider>
        <img class="max-h-150 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/6e009cfdacad5abcaff66033fa22a1b36093d4de.png" />
        <a-divider><a-typography-title :level="5" mark>点「已订阅，下一步」，弹窗</a-typography-title></a-divider>
        <img class="max-h-150 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/00c17d10b55fc1ef30874f4e7bc5633cce56d9f5.png" />
        <a-divider><a-typography-title :level="5" mark>点「继续！提醒消失即成功」，进入步骤二</a-typography-title></a-divider>
        <img class="max-h-150 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/a4bfabf9888796cd8e300b6afcf8bfb32973753e.png" />
        <a-divider><a-typography-title :level="5" mark>点「开始验证」，弹窗</a-typography-title></a-divider>
        <img class="max-h-150 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/60b07e7b899224274c001d8c277b050456212b8d.png" />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const activeKey = ref('3');
  const collapseActiveKey = ref();
</script>

<style scoped></style>
