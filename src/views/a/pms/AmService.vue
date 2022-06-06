<template>
  <a-card>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="欢迎语">
        <div class="flex flex-wrap justify-center items-center">
          <img class="max-w-60 rounded-lg" src="https://article.biliimg.com/bfs/article/750f47328fe6d0f7fab371d6ffe8072f14a2dbb4.jpg" />
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
        <div class="flex flex-wrap justify-center items-center">
          <img class="max-h-60 rounded-lg" src="https://article.biliimg.com/bfs/article/bdeecd46eec80459462ba0afe9558a8dbbf63591.jpg" />
          <img class="max-h-60 rounded-lg" src="https://article.biliimg.com/bfs/article/e926a12c196e559c83f037dcac2cf276ff374581.jpg" />
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
          <a-collapse-panel key="4" header="是否成功？">
            <a-typography-paragraph>
              <blockquote> 如何判断是否成功续期或升级？ </blockquote>
              <a-typography-paragraph copyable>
                <div>嗯嗯，是否成功？</div>
                <div>点开【设置头像订阅Apple Music】，学生5元/月勾上，</div>
                且【验证资格】提醒消失，即成功
              </a-typography-paragraph>
            </a-typography-paragraph>
            <div class="flex flex-wrap justify-center items-center">
              <img class="max-h-80 rounded-lg" src="https://article.biliimg.com/bfs/article/7b874bde1ce69b4096656e2668f6d348fd06f3aa.png" />
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
      <a-tab-pane key="3" tab="流程">
        <a-divider><a-typography-title :level="5" mark>步骤一、情况1</a-typography-title></a-divider>
        <img class="max-h-90 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/e9eefd7f578b1036cd77c9197a13fa26bcdced30.png" />
        <a-divider><a-typography-title :level="5" mark>步骤一、情况2</a-typography-title></a-divider>
        <img class="max-h-90 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/6e009cfdacad5abcaff66033fa22a1b36093d4de.png" />
        <a-divider><a-typography-title :level="5" mark>点「已订阅，下一步」，弹窗</a-typography-title></a-divider>
        <img class="max-h-90 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/00c17d10b55fc1ef30874f4e7bc5633cce56d9f5.png" />
        <a-divider><a-typography-title :level="5" mark>点「继续！提醒消失即成功」，进入步骤二</a-typography-title></a-divider>
        <img class="max-h-90 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/a4bfabf9888796cd8e300b6afcf8bfb32973753e.png" />
        <a-divider><a-typography-title :level="5" mark>点「开始验证」，弹窗</a-typography-title></a-divider>
        <img class="max-h-90 rounded-lg mx-auto" src="https://article.biliimg.com/bfs/article/60b07e7b899224274c001d8c277b050456212b8d.png" />
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const activeKey = ref('1');
  const collapseActiveKey = ref();
</script>

<style scoped></style>
