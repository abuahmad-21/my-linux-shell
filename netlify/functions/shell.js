const { execSync } = require('child_process');

// التعديل الأساسي هنا باستخدام export بدلاً من module.exports ليتوافق مع البيئة الجديدة
export const handler = async (event) => {
    const command = event.queryStringParameters.run;
    
    // التحقق من وجود أمر
    if (!command) {
        return { 
            statusCode: 400, 
            body: "خطأ: لم يتم إرسال أي أمر لتنفيذه." 
        };
    }

    try {
        // تنفيذ الأمر وتحويل المخرجات لنص
        // 2>&1 تضمن ظهور أخطاء اللينكس في الشاشة السوداء عندك
        const output = execSync(`${command} 2>&1`).toString();

        return {
            statusCode: 200,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
            body: output || "تم التنفيذ بنجاح (لا توجد مخرجات نصية)."
        };
    } catch (error) {
        // في حال فشل الأمر (مثل أمر خاطئ أو أداة غير موجودة)
        return {
            statusCode: 200,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
            body: error.stdout ? error.stdout.toString() : error.message
        };
    }
};
