---
title: Features
layout: template
filename: Features.md
--- 
# Features
This is an overview of the current features of the product. It can parse and inject the LLM output directly into the code using the TUI. And the compliance checks can be used to ask the LLM automatically to improve its previous answer, based on the error messages, (until a satisfactory solution is found, or the number of retries is depleted). That saves the developer time going back and forth to the LLM on trivial matters or editing time, and improves preserving focus. 
## Functions

<table>
    <thead>
        <tr>
            <th >Programming Language</th>
            <th colspan=3>Ask Improvement Features</th>
            <th colspan=5>Compliance Checks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td > - </td>
            <td >Docstring</td>
            <td>Comments</td>
            <td>Unit Tests</td>
            <td>Completeness</td>
            <td>Pre-commit</td>
            <td>Compilability</td>
            <td>Runnability</td>
            <td>Tests Pass</td>
        </tr>
        <tr>
            <td>Python</td>
            <td>✅</td>
            <td>❌</td>
            <td>❌</td>
            <td>✅</td>
            <td>❌</td>
            <td>-</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Bash</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>-</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Java</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Rust</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>C++</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
    </tbody>
</table>

## Classes
<table>
    <thead>
        <tr>
            <th >Programming Language</th>
            <th colspan=3>Ask Improvement Features</th>
            <th colspan=5>Compliance Checks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td > - </td>
            <td >Docstring</td>
            <td>Comments</td>
            <td>Unit Tests</td>
            <td>Completeness</td>
            <td>Pre-commit</td>
            <td>Compilability</td>
            <td>Runnability</td>
            <td>Tests Pass</td>
        </tr>
        <tr>
            <td>Python</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>-</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Bash</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>-</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Java</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Rust</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>C++</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
        </tr>
    </tbody>
</table>

## Files
| Programming Language | File Docstring    |
|----------------------|:------------------:
| Python               | ❌                |
| Bash                 | ❌                |
| Java                 | ❌                |
| C++                  | ❌                |
| Rust                 | ❌                |

## LLMs
Table with compliance checks in the columns, LLMs in the rows.

| LLM                  | Browser Communication | API Communication |
|----------------------|:---------------------:|:-----------------:|
| ChatGPT 3.5          | ✅                    | ❌                |
| ChatGPT 4            | ✅                    | ❌                |
| ChatGPT 3.5          | ❌                    | ❌                |
| ChatGPT 4            | ❌                    | ❌                |
| BART                 | ❌                    | ❌                |
| BERT                 | ❌                    | ❌                |
| T5                   | ❌                    | ❌                |
| UL2                  | ❌                    | ❌                |
| Cerebras-GPT         | ❌                    | ❌                |
| Open                 | ❌                    | ❌                |
| Pythia               | ❌                    | ❌                |
| Dolly                | ❌                    | ❌                |
| DLite                | ❌                    | ❌                |
| RWKV                 | ❌                    | ❌                |
| GPT-J-6B             | ❌                    | ❌                |
| GPT-NeoX-20          | ❌                    | ❌                |
| Bloom                | ❌                    | ❌                |
| StableLM-Alpha       | ❌                    | ❌                |
| FastChat-T5          | ❌                    | ❌                |
| h2oGPT               | ❌                    | ❌                |
| MPT-7B               | ❌                    | ❌                |
| RedPajama-INCITE     | ❌                    | ❌                |
| OpenLLaMA            | ❌                    | ❌                |
| Falcon               | ❌                    | ❌                |
| MPT-30B              | ❌                    | ❌                |
| LLaMA 2              | ❌                    | ❌                |
| OpenLM               | ❌                    | ❌                |
| Mistral 7B           | ❌                    | ❌                |
| OpenHermes           | ❌                    | ❌                |

