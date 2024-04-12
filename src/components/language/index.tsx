import { Icon } from '@iconify-icon/solid';

export function Language(props: any){
    // skill-icons
    const langToIconMapping: {[key: string]: string;} = {
        "JavaScript": "javascript",
        "Go": "golang",
        "Python": "python-dark",
        "Rust": "rust",
        "Java": "java-dark",
        "C#": "cs",
        "C++": "cpp",
        "Swift": "swift",
        "Kotlin": "kotlin-dark",
        "Ruby": "ruby",
        "Perl": "perl",
    }
    return (
        <div class="flex items-center w-50% p-3 rounded-lg shadow-sm text-light bg-dark-light">
            <span class="mr-auto font-bold">{props.language}</span>
            <Icon icon={`skill-icons:${langToIconMapping[props.language.split(' ')[0]]}`} width="32" height="32"/>
        </div>
    );
}
