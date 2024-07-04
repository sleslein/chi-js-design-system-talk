export default ({ marp }) => {
    console.log('custom marp engine used');
    marp.customDirectives.local.colorPreset = (value) => {
        switch (value) {
            case 'sunset':
              return { backgroundColor: '#e62e00', color: '#fffff2' }
            case 'dark':
              return { backgroundColor: '#303033', color: '#f8f8ff' }
            default:
              return {}
          }
    };

    marp.theme ="theme.css";
  
    return marp;
  }