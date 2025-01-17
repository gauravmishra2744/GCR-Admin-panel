import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header translations
      'header.search': 'Search',
      'header.notifications': 'Notifications',
      'header.profile': 'Profile',
      'header.settings': 'Settings',
      'header.logout': 'Logout',
      'header.theme.toggle': 'Toggle theme',
      'header.help': 'Help',
      'header.messages': 'Messages',
      
      // Dashboard translations
      'dashboard.title': 'Dashboard',
      'dashboard.total_sales': 'Total Sales',
      'dashboard.total_orders': 'Total Orders',
      'dashboard.total_customers': 'Total Customers',
      'dashboard.total_revenue': 'Total Revenue',
      'dashboard.recent_orders': 'Recent Orders',
      'dashboard.sales_analytics': 'Sales Analytics',
      'dashboard.top_products': 'Top Products',
      'dashboard.customer_activity': 'Customer Activity',
      'dashboard.view_all': 'View All',
      'dashboard.range.7d': '7 Days',
      'dashboard.range.1m': '1 Month',
      'dashboard.range.3m': '3 Months',
      'dashboard.range.1y': '1 Year',
      'dashboard.custom_range': 'Custom Range',
      
      // Product translations
      'product.management': 'Product Management',
      'product.add': 'Add Product',
      'product.edit': 'Edit Product',
      'product.delete': 'Delete Product',
      'product.name': 'Product Name',
      'product.category': 'Category',
      'product.price': 'Price',
      'product.stock': 'Stock',
      'product.status': 'Status',
      'product.actions': 'Actions',
      'product.scan.barcode': 'Scan Barcode',
      'product.scan.lens': 'Use Google Lens',
      'product.template.download': 'Download Template',
      'product.template.upload': 'Upload Products',
      'button.confirm': 'Confirm',
      'button.cancel': 'Cancel',
      'button.save': 'Save',
      'message.success': 'Operation successful',
      'message.error': 'Operation failed',
      'message.confirm': 'Are you sure you want to perform this action?',
      'message.delete.confirm': 'Are you sure you want to delete this product?',
      'product.barcode': 'Barcode',
      'product.description': 'Description',
      'product.image': 'Product Image',
      'product.upload': 'Upload'
    }
  },
  hi: {
    translation: {
      // Header translations
      'header.search': 'खोज',
      'header.notifications': 'सूचनाएं',
      'header.profile': 'प्रोफ़ाइल',
      'header.settings': 'सेटिंग्स',
      'header.logout': 'लॉग आउट',
      'header.theme.toggle': 'थीम बदलें',
      'header.help': 'सहायता',
      'header.messages': 'संदेश',
      
      // Dashboard translations
      'dashboard.title': 'डैशबोर्ड',
      'dashboard.total_sales': 'कुल बिक्री',
      'dashboard.total_orders': 'कुल आदेश',
      'dashboard.total_customers': 'कुल ग्राहक',
      'dashboard.total_revenue': 'कुल राजस्व',
      'dashboard.recent_orders': 'हाल के आदेश',
      'dashboard.sales_analytics': 'बिक्री विश्लेषण',
      'dashboard.top_products': 'शीर्ष उत्पाद',
      'dashboard.customer_activity': 'ग्राहक गतिविधि',
      'dashboard.view_all': 'सभी देखें',
      'dashboard.range.7d': '7 दिन',
      'dashboard.range.1m': '1 महीना',
      'dashboard.range.3m': '3 महीने',
      'dashboard.range.1y': '1 वर्ष',
      'dashboard.custom_range': 'कस्टम रेंज',
      
      // Product translations
      'product.management': 'उत्पाद प्रबंधन',
      'product.add': 'उत्पाद जोड़ें',
      'product.edit': 'उत्पाद संपादित करें',
      'product.delete': 'उत्पाद हटाएं',
      'product.name': 'उत्पाद का नाम',
      'product.category': 'श्रेणी',
      'product.price': 'मूल्य',
      'product.stock': 'स्टॉक',
      'product.status': 'स्थिति',
      'product.actions': 'कार्रवाई',
      'product.scan.barcode': 'बारकोड स्कैन करें',
      'product.scan.lens': 'गूगल लेंस का उपयोग करें',
      'product.template.download': 'टेम्पलेट डाउनलोड करें',
      'product.template.upload': 'उत्पाद अपलोड करें',
      'button.confirm': 'पुष्टि करें',
      'button.cancel': 'रद्द करें',
      'button.save': 'सहेजें',
      'message.success': 'कार्य सफल रहा',
      'message.error': 'कार्य विफल रहा',
      'message.confirm': 'क्या आप इस कार्य को करना चाहते हैं?',
      'message.delete.confirm': 'क्या आप इस उत्पाद को हटाना चाहते हैं?',
      'product.barcode': 'बारकोड',
      'product.description': 'विवरण',
      'product.image': 'उत्पाद की छवि',
      'product.upload': 'अपलोड करें'
    }
  }
};

// Initialize i18next with English and Hindi languages
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;