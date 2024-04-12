import { Tooltip } from "@kobalte/core";
import { Icon } from '@iconify-icon/solid';
import { Show } from "solid-js";
import './style.css';

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
    const lang: string = props.language.split(' ')[0];
    const desc: string = props.language.split(' ')[1];

    return (
        <div class="flex items-center w-50% p-3 rounded-lg shadow-sm text-light bg-dark-light">
            <span class="mr-auto">{lang}</span>
            <Show when={desc}>
                <Tooltip.Root openDelay={100} closeDelay={100}>
                      <Tooltip.Trigger class="tooltip__trigger h-2rem font-code bg-second text-light rd-8px">{desc} only</Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content class="tooltip__content b-1px b-solid b-light bg-dark px-1rem rd-8px">
                          <Tooltip.Arrow class="text-dark"/>
                          <p class="font-code text-light">Only allowed for {desc} variables</p>
                        </Tooltip.Content>
                      </Tooltip.Portal>
                </Tooltip.Root>
                <span class="ml-2"></span>
            </Show>
            <Icon icon={`skill-icons:${langToIconMapping[lang]}`} width="32" height="32"/>
        </div>
    );
}
