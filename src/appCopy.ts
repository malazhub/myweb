import type { LangCode } from '@/i18n';
import type { AppItem } from '@/types';

export interface AppLocalizedCopy {
  name?: string;
  tagline?: string;
  description?: string;
  features?: string[];
}
interface LocaleExtension {
  ui: Record<string, string>;
  apps: Record<string, AppLocalizedCopy>;
}

export const localeExtensions: Record<LangCode, LocaleExtension> = {
  en: {
    ui: {
      catConstruction:'Construction', catConstructionDesc:'MEP design, building systems, coordination, and technical project support.',
      aboutTitle:'About dady', aboutBody:'dady brings useful digital tools together in one easy-to-explore platform. Discover applications for construction, management, health, money, hiring, productivity, gaming, and learning. Each category helps you find a tool for a practical task, with clear descriptions and direct access to the app.',
      constructionEyebrow:'Construction • MEP services', constructionHeading:'Building systems, coordinated from the first drawing to the final review.',
      constructionBody:'Explore our construction services for commercial, educational, and retail projects. We support mechanical, electrical, and plumbing design, coordinated shop drawings, bills of quantities, and technical document reviews.',
      projectTower:'Commercial tower', projectCampus:'School campus', projectMall:'Shopping mall', projectDocs:'Technical documentation',
      serviceDesign:'MEP design', serviceDrawings:'Shop drawings and coordination', serviceBoq:'Bill of quantities', serviceReview:'Technical document review',
      discussProject:'Discuss a project', contactTitle:'Tell us about your project', contactSubtitle:'Leave your contact details and a short introduction. We will get back to you as soon as we can.',
      nameLabel:'Full name', emailLabel:'Email address', phoneLabel:'Phone number', countryCodeLabel:'Country code', phonePlaceholder:'Your phone number',
      send:'Send', back:'Back', close:'Close', thankYou:'Thank you for your interest!',
      thankYouBody:'Thank you for reaching out. Once we receive your message, our team will contact you soon.',
      emailNotice:'Your email app should open with your details filled in. Please send the prepared email to complete your inquiry.',
      emailSubject:'Construction project inquiry'
    },
    apps: {
      construction:{name:'Construction',tagline:'Building systems & MEP services',description:'A construction services hub for MEP design, shop drawings, quantity takeoffs, coordination, and technical document reviews for commercial, school, and retail projects.',features:['MEP design','Shop drawings','Bill of quantities','Technical reviews']},
      sana:{tagline:'Health and care organizer',description:'Sana helps you manage your medications, doctors, pharmacies, appointments, and more — all in one convenient place. Organise your health information and stay on top of your care.',features:['Medication management','Doctors and care providers','Pharmacies','Appointments and health information']}
    }
  },
  es: {
    ui: {
      catConstruction:'Construcción', catConstructionDesc:'Diseño MEP, sistemas del edificio, coordinación y apoyo técnico para proyectos.',
      aboutTitle:'Acerca de dady', aboutBody:'dady reúne herramientas digitales útiles en una plataforma fácil de explorar. Descubre aplicaciones de construcción, gestión, salud, finanzas, contratación, productividad, juegos y aprendizaje. Cada categoría te ayuda a encontrar una herramienta práctica, con descripciones claras y acceso directo.',
      constructionEyebrow:'Construcción • Servicios MEP', constructionHeading:'Sistemas del edificio coordinados desde el primer plano hasta la revisión final.',
      constructionBody:'Descubre nuestros servicios para proyectos comerciales, educativos y minoristas. Ofrecemos diseño mecánico, eléctrico y de fontanería, planos de taller coordinados, mediciones y revisión técnica de documentos.',
      projectTower:'Torre comercial', projectCampus:'Campus escolar', projectMall:'Centro comercial', projectDocs:'Documentación técnica',
      serviceDesign:'Diseño MEP', serviceDrawings:'Planos de taller y coordinación', serviceBoq:'Presupuesto de cantidades', serviceReview:'Revisión de documentos técnicos',
      discussProject:'Hablar de un proyecto', contactTitle:'Cuéntanos tu proyecto', contactSubtitle:'Déjanos tus datos y una breve descripción. Nos pondremos en contacto contigo lo antes posible.',
      nameLabel:'Nombre completo', emailLabel:'Correo electrónico', phoneLabel:'Número de teléfono', countryCodeLabel:'Prefijo del país', phonePlaceholder:'Tu número de teléfono',
      send:'Enviar', back:'Volver', close:'Cerrar', thankYou:'¡Gracias por tu interés!',
      thankYouBody:'Gracias por contactarnos. Cuando recibamos tu mensaje, nuestro equipo se pondrá en contacto contigo pronto.',
      emailNotice:'Tu aplicación de correo debería abrirse con tus datos preparados. Envía el correo para completar la solicitud.',
      emailSubject:'Consulta sobre un proyecto de construcción'
    },
    apps: {
      construction:{name:'Construcción',tagline:'Sistemas de edificios y servicios MEP',description:'Servicios de construcción para diseño MEP, planos de taller, mediciones, coordinación y revisión técnica de proyectos comerciales, escolares y minoristas.',features:['Diseño MEP','Planos de taller','Mediciones','Revisiones técnicas']},
      sana:{tagline:'Organizador de salud y cuidados',description:'Sana te ayuda a gestionar tus medicamentos, médicos, farmacias, citas y mucho más, todo en un solo lugar. Organiza tu información de salud y mantén el control de tu cuidado.',features:['Gestión de medicamentos','Médicos y profesionales de salud','Farmacias','Citas e información de salud']}
    }
  },
  fr: {
    ui: {
      catConstruction:'Construction', catConstructionDesc:'Conception MEP, systèmes du bâtiment, coordination et accompagnement technique.',
      aboutTitle:'À propos de dady', aboutBody:'dady rassemble des outils numériques utiles sur une plateforme facile à explorer. Découvrez des applications pour la construction, la gestion, la santé, les finances, le recrutement, la productivité, les jeux et l’apprentissage. Chaque catégorie vous aide à trouver un outil pratique, avec des descriptions claires et un accès direct.',
      constructionEyebrow:'Construction • Services MEP', constructionHeading:'Des systèmes coordonnés du premier plan jusqu’à la revue finale.',
      constructionBody:'Découvrez nos services pour les projets commerciaux, scolaires et de vente au détail. Nous accompagnons la conception mécanique, électrique et plomberie, les plans d’exécution, les métrés et la revue technique des documents.',
      projectTower:'Tour commerciale', projectCampus:'Campus scolaire', projectMall:'Centre commercial', projectDocs:'Documentation technique',
      serviceDesign:'Conception MEP', serviceDrawings:'Plans d’exécution et coordination', serviceBoq:'Métré et quantitatif', serviceReview:'Revue des documents techniques',
      discussProject:'Discuter d’un projet', contactTitle:'Parlez-nous de votre projet', contactSubtitle:'Laissez vos coordonnées et une courte présentation. Nous vous répondrons dès que possible.',
      nameLabel:'Nom complet', emailLabel:'Adresse e-mail', phoneLabel:'Numéro de téléphone', countryCodeLabel:'Indicatif du pays', phonePlaceholder:'Votre numéro de téléphone',
      send:'Envoyer', back:'Retour', close:'Fermer', thankYou:'Merci pour votre intérêt !',
      thankYouBody:'Merci de nous avoir contactés. Dès réception de votre message, notre équipe vous répondra rapidement.',
      emailNotice:'Votre application de messagerie devrait s’ouvrir avec vos coordonnées. Envoyez le message préparé pour finaliser votre demande.',
      emailSubject:'Demande de projet de construction'
    },
    apps: {
      construction:{name:'Construction',tagline:'Systèmes du bâtiment et services MEP',description:'Services de construction dédiés à la conception MEP, aux plans d’exécution, aux métrés, à la coordination et à la revue technique de projets commerciaux, scolaires et de vente au détail.',features:['Conception MEP','Plans d’exécution','Métrés','Revues techniques']},
      sana:{tagline:'Organisateur de santé et de soins',description:'Sana vous aide à gérer vos médicaments, médecins, pharmacies, rendez-vous et bien plus encore, au même endroit. Organisez vos informations de santé et suivez vos soins plus facilement.',features:['Gestion des médicaments','Médecins et soignants','Pharmacies','Rendez-vous et informations de santé']}
    }
  },
  de: {
    ui: {
      catConstruction:'Bauwesen', catConstructionDesc:'MEP-Planung, Gebäudetechnik, Koordination und technische Projektunterstützung.',
      aboutTitle:'Über dady', aboutBody:'dady vereint nützliche digitale Werkzeuge auf einer leicht erkundbaren Plattform. Entdecken Sie Anwendungen für Bauwesen, Management, Gesundheit, Finanzen, Recruiting, Produktivität, Gaming und Lernen. Jede Kategorie hilft Ihnen, ein passendes Werkzeug für praktische Aufgaben zu finden – mit klaren Beschreibungen und direktem App-Zugang.',
      constructionEyebrow:'Bauwesen • MEP-Leistungen', constructionHeading:'Gebäudetechnik – koordiniert vom ersten Plan bis zur abschließenden Prüfung.',
      constructionBody:'Entdecken Sie unsere Leistungen für Gewerbe-, Schul- und Einzelhandelsprojekte. Wir unterstützen die Planung von Heizung, Lüftung, Elektro und Sanitär, koordinierte Werkstattzeichnungen, Mengenermittlungen und technische Dokumentenprüfungen.',
      projectTower:'Gewerbehochhaus', projectCampus:'Schulcampus', projectMall:'Einkaufszentrum', projectDocs:'Technische Dokumentation',
      serviceDesign:'MEP-Planung', serviceDrawings:'Werkstattzeichnungen und Koordination', serviceBoq:'Mengenermittlung', serviceReview:'Prüfung technischer Dokumente',
      discussProject:'Projekt besprechen', contactTitle:'Erzählen Sie uns von Ihrem Projekt', contactSubtitle:'Hinterlassen Sie Ihre Kontaktdaten und eine kurze Beschreibung. Wir melden uns so bald wie möglich.',
      nameLabel:'Vollständiger Name', emailLabel:'E-Mail-Adresse', phoneLabel:'Telefonnummer', countryCodeLabel:'Ländervorwahl', phonePlaceholder:'Ihre Telefonnummer',
      send:'Senden', back:'Zurück', close:'Schließen', thankYou:'Vielen Dank für Ihr Interesse!',
      thankYouBody:'Vielen Dank für Ihre Nachricht. Sobald wir sie erhalten haben, wird sich unser Team zeitnah bei Ihnen melden.',
      emailNotice:'Ihre E-Mail-Anwendung sollte sich mit Ihren Angaben öffnen. Bitte senden Sie die vorbereitete E-Mail, um Ihre Anfrage abzuschließen.',
      emailSubject:'Anfrage zu einem Bauprojekt'
    },
    apps: {
      construction:{name:'Bauwesen',tagline:'Gebäudetechnik und MEP-Leistungen',description:'MEP-Planung, Werkstattzeichnungen, Mengenermittlung, Koordination und technische Dokumentenprüfungen für Gewerbe-, Schul- und Einzelhandelsprojekte.',features:['MEP-Planung','Werkstattzeichnungen','Mengenermittlung','Technische Prüfungen']},
      sana:{tagline:'Gesundheits- und Pflegeorganisator',description:'Mit Sana verwalten Sie Medikamente, Ärzte, Apotheken, Termine und mehr an einem Ort. Organisieren Sie Ihre Gesundheitsinformationen und behalten Sie Ihre Versorgung im Blick.',features:['Medikamentenverwaltung','Ärzte und Betreuungspersonal','Apotheken','Termine und Gesundheitsinformationen']}
    }
  },
  pt: {
    ui: {
      catConstruction:'Construção', catConstructionDesc:'Projeto MEP, sistemas prediais, coordenação e apoio técnico a projetos.',
      aboutTitle:'Sobre a dady', aboutBody:'A dady reúne ferramentas digitais úteis numa plataforma fácil de explorar. Descubra aplicações de construção, gestão, saúde, finanças, recrutamento, produtividade, jogos e aprendizagem. Cada categoria ajuda a encontrar uma ferramenta prática, com descrições claras e acesso direto.',
      constructionEyebrow:'Construção • Serviços MEP', constructionHeading:'Sistemas prediais coordenados do primeiro desenho à revisão final.',
      constructionBody:'Conheça os nossos serviços para projetos comerciais, escolares e de retalho. Apoiamos projetos mecânicos, elétricos e hidráulicos, desenhos de execução coordenados, mapas de quantidades e revisões técnicas de documentos.',
      projectTower:'Torre comercial', projectCampus:'Campus escolar', projectMall:'Centro comercial', projectDocs:'Documentação técnica',
      serviceDesign:'Projeto MEP', serviceDrawings:'Desenhos de execução e coordenação', serviceBoq:'Mapa de quantidades', serviceReview:'Revisão de documentos técnicos',
      discussProject:'Falar sobre um projeto', contactTitle:'Conte-nos sobre o seu projeto', contactSubtitle:'Deixe os seus contactos e uma breve descrição. Entraremos em contacto consigo assim que possível.',
      nameLabel:'Nome completo', emailLabel:'Endereço de e-mail', phoneLabel:'Número de telefone', countryCodeLabel:'Indicativo do país', phonePlaceholder:'O seu número de telefone',
      send:'Enviar', back:'Voltar', close:'Fechar', thankYou:'Obrigado pelo seu interesse!',
      thankYouBody:'Obrigado pelo contacto. Assim que recebermos a sua mensagem, a nossa equipa entrará em contacto em breve.',
      emailNotice:'A sua aplicação de e-mail deverá abrir com os seus dados preenchidos. Envie a mensagem preparada para concluir o pedido.',
      emailSubject:'Pedido sobre projeto de construção'
    },
    apps: {
      construction:{name:'Construção',tagline:'Sistemas prediais e serviços MEP',description:'Serviços de construção para projeto MEP, desenhos de execução, mapas de quantidades, coordenação e revisão técnica de projetos comerciais, escolares e de retalho.',features:['Projeto MEP','Desenhos de execução','Mapas de quantidades','Revisões técnicas']},
      sana:{tagline:'Organizador de saúde e cuidados',description:'A Sana ajuda a gerir medicamentos, médicos, farmácias, consultas e muito mais, tudo num só lugar. Organize as suas informações de saúde e acompanhe os seus cuidados.',features:['Gestão de medicamentos','Médicos e profissionais de saúde','Farmácias','Consultas e informações de saúde']}
    }
  },
  ar: {
    ui: {
      catConstruction:'الإنشاءات', catConstructionDesc:'تصميم أنظمة المباني وأعمال MEP والتنسيق والدعم الفني للمشاريع.',
      aboutTitle:'عن dady', aboutBody:'تجمع dady أدوات رقمية مفيدة في منصة واحدة سهلة التصفح. اكتشف تطبيقات الإنشاءات والإدارة والصحة والمال والتوظيف والإنتاجية والألعاب والتعلّم. يساعدك كل تصنيف في العثور على أداة عملية، مع وصف واضح وإمكانية الوصول المباشر إلى التطبيق.',
      constructionEyebrow:'الإنشاءات • خدمات MEP', constructionHeading:'أنظمة مبانٍ منسّقة من أول مخطط إلى المراجعة النهائية.',
      constructionBody:'تعرّف إلى خدماتنا للمشاريع التجارية والمدارس ومراكز التسوق. نقدّم دعم تصميم الأنظمة الميكانيكية والكهربائية والصحية، ومخططات التنفيذ المنسّقة، وجداول الكميات، ومراجعة المستندات الفنية.',
      projectTower:'برج تجاري', projectCampus:'حرم مدرسي', projectMall:'مركز تسوق', projectDocs:'المستندات الفنية',
      serviceDesign:'تصميم أنظمة MEP', serviceDrawings:'مخططات التنفيذ والتنسيق', serviceBoq:'جداول الكميات', serviceReview:'مراجعة المستندات الفنية',
      discussProject:'ناقش مشروعك', contactTitle:'أخبرنا عن مشروعك', contactSubtitle:'أدخل معلومات التواصل ووصفاً مختصراً للمشروع. سنتواصل معك في أقرب وقت ممكن.',
      nameLabel:'الاسم الكامل', emailLabel:'البريد الإلكتروني', phoneLabel:'رقم الهاتف', countryCodeLabel:'رمز الدولة', phonePlaceholder:'رقم هاتفك',
      send:'إرسال', back:'رجوع', close:'إغلاق', thankYou:'شكراً لاهتمامك!',
      thankYouBody:'شكراً لتواصلك معنا. بعد استلام رسالتك، سيتواصل معك فريقنا قريباً.',
      emailNotice:'من المفترض أن يفتح تطبيق البريد الإلكتروني مع بياناتك جاهزة. أرسل الرسالة المعدّة لإكمال طلبك.',
      emailSubject:'استفسار عن مشروع إنشائي'
    },
    apps: {
      construction:{name:'الإنشاءات',tagline:'أنظمة المباني وخدمات MEP',description:'خدمات إنشائية تشمل تصميم أنظمة MEP ومخططات التنفيذ وجداول الكميات والتنسيق والمراجعة الفنية للمشاريع التجارية والمدارس ومراكز التسوق.',features:['تصميم MEP','مخططات التنفيذ','جداول الكميات','المراجعات الفنية']},
      sana:{tagline:'منظّم الصحة والرعاية',description:'يساعدك Sana على إدارة أدويتك وأطبائك وصيدلياتك ومواعيدك والمزيد في مكان واحد. نظّم معلوماتك الصحية وتابع رعايتك بسهولة.',features:['إدارة الأدوية','الأطباء ومقدمو الرعاية','الصيدليات','المواعيد والمعلومات الصحية']}
    }
  },
  hi: {
    ui: {
      catConstruction:'निर्माण', catConstructionDesc:'MEP डिज़ाइन, बिल्डिंग सिस्टम, समन्वय और परियोजना तकनीकी सहायता।',
      aboutTitle:'dady के बारे में', aboutBody:'dady उपयोगी डिजिटल टूल्स को एक ऐसे प्लेटफ़ॉर्म पर लाता है जिसे आसानी से खोजा जा सकता है। निर्माण, प्रबंधन, स्वास्थ्य, वित्त, भर्ती, उत्पादकता, गेमिंग और सीखने के ऐप्स खोजें। हर श्रेणी स्पष्ट विवरण और ऐप तक सीधे पहुँच के साथ सही टूल ढूँढने में मदद करती है।',
      constructionEyebrow:'निर्माण • MEP सेवाएँ', constructionHeading:'पहली ड्रॉइंग से अंतिम समीक्षा तक समन्वित बिल्डिंग सिस्टम।',
      constructionBody:'व्यावसायिक, स्कूल और रिटेल परियोजनाओं के लिए हमारी सेवाएँ देखें। हम मैकेनिकल, इलेक्ट्रिकल और प्लंबिंग डिज़ाइन, समन्वित शॉप ड्रॉइंग, मात्रा सूची और तकनीकी दस्तावेज़ समीक्षा में सहायता करते हैं।',
      projectTower:'व्यावसायिक टावर', projectCampus:'स्कूल परिसर', projectMall:'शॉपिंग मॉल', projectDocs:'तकनीकी दस्तावेज़',
      serviceDesign:'MEP डिज़ाइन', serviceDrawings:'शॉप ड्रॉइंग और समन्वय', serviceBoq:'मात्रा सूची', serviceReview:'तकनीकी दस्तावेज़ समीक्षा',
      discussProject:'परियोजना पर चर्चा करें', contactTitle:'अपनी परियोजना के बारे में बताएं', contactSubtitle:'अपना संपर्क विवरण और संक्षिप्त परिचय दें। हम जल्द से जल्द आपसे संपर्क करेंगे।',
      nameLabel:'पूरा नाम', emailLabel:'ईमेल पता', phoneLabel:'फ़ोन नंबर', countryCodeLabel:'देश का कोड', phonePlaceholder:'आपका फ़ोन नंबर',
      send:'भेजें', back:'वापस', close:'बंद करें', thankYou:'आपकी रुचि के लिए धन्यवाद!',
      thankYouBody:'संपर्क करने के लिए धन्यवाद। आपका संदेश मिलने के बाद हमारी टीम जल्द आपसे संपर्क करेगी।',
      emailNotice:'आपका ईमेल ऐप भरी हुई जानकारी के साथ खुलना चाहिए। अनुरोध पूरा करने के लिए तैयार ईमेल भेजें।',
      emailSubject:'निर्माण परियोजना संबंधी पूछताछ'
    },
    apps: {
      construction:{name:'निर्माण',tagline:'बिल्डिंग सिस्टम और MEP सेवाएँ',description:'व्यावसायिक, स्कूल और रिटेल परियोजनाओं के लिए MEP डिज़ाइन, शॉप ड्रॉइंग, मात्रा सूची, समन्वय और तकनीकी दस्तावेज़ समीक्षा की निर्माण सेवाएँ।',features:['MEP डिज़ाइन','शॉप ड्रॉइंग','मात्रा सूची','तकनीकी समीक्षा']},
      sana:{tagline:'स्वास्थ्य और देखभाल आयोजक',description:'Sana आपको अपनी दवाइयाँ, डॉक्टर, फ़ार्मेसी, अपॉइंटमेंट और बहुत कुछ एक ही जगह प्रबंधित करने में मदद करता है। अपनी स्वास्थ्य जानकारी व्यवस्थित रखें और देखभाल पर नज़र रखें।',features:['दवा प्रबंधन','डॉक्टर और देखभाल प्रदाता','फ़ार्मेसी','अपॉइंटमेंट और स्वास्थ्य जानकारी']}
    }
  },
  zh: {
    ui: {
      catConstruction:'建筑施工', catConstructionDesc:'MEP 设计、建筑系统、协调及项目技术支持。',
      aboutTitle:'关于 dady', aboutBody:'dady 将实用的数字工具汇集在一个便于浏览的平台中。发现建筑施工、管理、健康、财务、招聘、效率、游戏和学习类应用。每个分类都通过清晰介绍和直接访问，帮助你找到解决实际任务的工具。',
      constructionEyebrow:'建筑施工 • MEP 服务', constructionHeading:'从第一张图纸到最终审查，协调建筑系统。',
      constructionBody:'了解我们面向商业、校园和零售项目的服务。我们提供机械、电气和给排水设计、综合施工图、工程量清单以及技术文件审查支持。',
      projectTower:'商业塔楼', projectCampus:'学校校园', projectMall:'购物中心', projectDocs:'技术文档',
      serviceDesign:'MEP 设计', serviceDrawings:'施工图与协调', serviceBoq:'工程量清单', serviceReview:'技术文件审查',
      discussProject:'讨论项目', contactTitle:'告诉我们你的项目', contactSubtitle:'留下联系方式和简短介绍，我们会尽快与你联系。',
      nameLabel:'姓名', emailLabel:'电子邮箱', phoneLabel:'电话号码', countryCodeLabel:'国家区号', phonePlaceholder:'你的电话号码',
      send:'发送', back:'返回', close:'关闭', thankYou:'感谢你的关注！',
      thankYouBody:'感谢你与我们联系。收到你的信息后，我们的团队会尽快与你联系。',
      emailNotice:'你的邮件应用应会打开并填入相关信息。请发送已准备好的邮件以完成咨询。',
      emailSubject:'建筑项目咨询'
    },
    apps: {
      construction:{name:'建筑施工',tagline:'建筑系统与 MEP 服务',description:'面向商业、学校和零售项目的施工服务，提供 MEP 设计、施工图、工程量清单、协调和技术文件审查。',features:['MEP 设计','施工图','工程量清单','技术审查']},
      sana:{tagline:'健康与照护管理工具',description:'Sana 帮助你在一个地方管理药物、医生、药房、预约等健康事务。整理健康信息，更轻松地跟进日常照护。',features:['药物管理','医生与护理人员','药房','预约与健康信息']}
    }
  },
  tr: {
    ui: {
      catConstruction:'İnşaat', catConstructionDesc:'MEP tasarımı, bina sistemleri, koordinasyon ve teknik proje desteği.',
      aboutTitle:'dady hakkında', aboutBody:'dady, kullanışlı dijital araçları kolayca keşfedilebilen tek bir platformda bir araya getirir. İnşaat, yönetim, sağlık, finans, işe alım, verimlilik, oyun ve öğrenme uygulamalarını keşfedin. Her kategori, açık açıklamalar ve doğrudan erişimle pratik bir görev için doğru aracı bulmanıza yardımcı olur.',
      constructionEyebrow:'İnşaat • MEP hizmetleri', constructionHeading:'İlk çizimden son incelemeye kadar koordineli bina sistemleri.',
      constructionBody:'Ticari, okul ve perakende projelerine yönelik hizmetlerimizi keşfedin. Mekanik, elektrik ve sıhhi tesisat tasarımı, koordine uygulama çizimleri, metraj cetvelleri ve teknik belge incelemelerinde destek sağlıyoruz.',
      projectTower:'Ticari kule', projectCampus:'Okul kampüsü', projectMall:'Alışveriş merkezi', projectDocs:'Teknik dokümantasyon',
      serviceDesign:'MEP tasarımı', serviceDrawings:'Uygulama çizimleri ve koordinasyon', serviceBoq:'Metraj ve keşif özeti', serviceReview:'Teknik belge incelemesi',
      discussProject:'Projenizi görüşün', contactTitle:'Projenizden bize bahsedin', contactSubtitle:'İletişim bilgilerinizi ve kısa bir açıklama bırakın. En kısa sürede sizinle iletişime geçeceğiz.',
      nameLabel:'Ad soyad', emailLabel:'E-posta adresi', phoneLabel:'Telefon numarası', countryCodeLabel:'Ülke kodu', phonePlaceholder:'Telefon numaranız',
      send:'Gönder', back:'Geri', close:'Kapat', thankYou:'İlginiz için teşekkür ederiz!',
      thankYouBody:'Bizimle iletişime geçtiğiniz için teşekkürler. Mesajınızı aldıktan sonra ekibimiz en kısa sürede sizinle iletişime geçecektir.',
      emailNotice:'E-posta uygulamanız bilgileri doldurulmuş şekilde açılmalıdır. Talebinizi tamamlamak için hazırlanan e-postayı gönderin.',
      emailSubject:'İnşaat projesi hakkında talep'
    },
    apps: {
      construction:{name:'İnşaat',tagline:'Bina sistemleri ve MEP hizmetleri',description:'Ticari, okul ve perakende projeleri için MEP tasarımı, uygulama çizimleri, metraj, koordinasyon ve teknik belge incelemesi sunan inşaat hizmetleri.',features:['MEP tasarımı','Uygulama çizimleri','Metraj','Teknik incelemeler']},
      sana:{tagline:'Sağlık ve bakım düzenleyicisi',description:'Sana; ilaçlarınızı, doktorlarınızı, eczanelerinizi, randevularınızı ve daha fazlasını tek bir yerden yönetmenize yardımcı olur. Sağlık bilgilerinizi düzenleyin ve bakımınızı takip edin.',features:['İlaç yönetimi','Doktorlar ve sağlık çalışanları','Eczaneler','Randevular ve sağlık bilgileri']}
    }
  }
};

export function localizedApp(app: AppItem, lang: LangCode): AppItem {
  const copy = localeExtensions[lang].apps[app.id];
  return copy ? { ...app, ...copy } : app;
}
