import {ElButton,ElContainer,ElHeader,ElAside,ElMain,ElFooter,
    ElMenu,ElSubMenu,ElMenuItem,ElMenuItemGroup,ElIcon,ElTag,ElBreadcrumb,ElBreadcrumbItem} 
     from 'element-plus/lib/components';
  import 'element-plus/dist/index.css'

  import * as Icons from '@element-plus/icons-vue'


 export  default  function usePlugin(app)  
 {
    app.use(ElButton);
    app.use(ElContainer);
    app.use(ElHeader);
    app.use(ElAside);
    app.use(ElMain);
    app.use(ElFooter);
    app.use(ElMenu);
    app.use(ElIcon);
    app.use(ElSubMenu);
    app.use(ElMenuItem);
    app.use(ElMenuItemGroup);
    app.use(ElTag);
    app.use(ElBreadcrumb);
    app.use(ElBreadcrumbItem);
    // 注册全局组件
        Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
  })
 }