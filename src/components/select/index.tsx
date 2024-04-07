import { Select } from "@kobalte/core";
import "./style.css"
import { JSXElement, createSignal } from "solid-js";

export function LangSelect() {
    const [getLanguage, setLanguage] = createSignal();

    return (
        <Select.Root
          value={getLanguage()}
          onChange={setLanguage}
          options={["Go", "Python", "Rust", "JavaScript"]}
          placeholder="Select a language..."
          itemComponent={props => (
            <Select.Item item={props.item} class="select__item ui-highlighted:bg-primary">
              <Select.ItemLabel>{props.item.rawValue as JSXElement}</Select.ItemLabel>
              <Select.ItemIndicator class="select__item-indicator">
              </Select.ItemIndicator>
            </Select.Item>
          )}
        >
          <Select.Trigger class="select__trigger font-code" aria-label="Programming language">
            <Select.Value class="select__value">
              {state => state.selectedOption() as JSXElement}
            </Select.Value>
            <Select.Icon class="select__icon">
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content class="select__content font-code">
              <Select.Listbox class="select__listbox" />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
  );
}
