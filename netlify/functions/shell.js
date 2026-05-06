import os
import subprocess

def list_top_tools():
    # قائمة بأقوى 10 أدوات في كالي وكيفية استدعائها
    tools = {
        "1. Nmap": "فحص الشبكات والمنافذ المفتوحة",
        "2. Metasploit": "إطار عمل لاختبار الاختراق (صعب تشغيله كاملاً على نيتلفاي)",
        "3. Burp Suite": "فحص ثغرات تطبيقات الويب",
        "4. John the Ripper": "كسر كلمات المرور",
        "5. Wireshark": "تحليل حزم البيانات",
        "6. Hydra": "الهجوم العنيف (Brute Force) على البروتوكولات",
        "7. Sqlmap": "اختبار ثغرات SQL Injection",
        "8. Aircrack-ng": "اختبار اختراق شبكات الواي فاي",
        "9. Sherlock": "البحث عن اليوزر في 3000+ موقع (الأداة التي طلبتها)",
        "10. Social Engineering Toolkit (SET)": "أدوات الهندسة الاجتماعية"
    }
    return tools

def run_sherlock(username):
    # محاكاة لعمل أداة Sherlock (تحتاج تثبيت الأداة كـ Binary لتعمل فعلياً)
    print(f"[*] جاري البحث عن المستخدم: {username} في أكثر من 3000 موقع...")
    # هنا يتم استدعاء أمر التشغيل إذا كانت الأداة مرفوعة مع الكود
    # command = f"python3 sherlock {username}"
    # os.system(command)

if __name__ == "__main__":
    print("--- Kali Linux Top Tools Manager ---")
    for tool, desc in list_top_tools().items():
        print(f"{tool}: {desc}")
